#!/bin/bash

# ==============================================================================
# Valux Store Service Runner
# Orchestrates Backend, Frontend, and Loophole
# ==============================================================================

# Configuration
PROJECT_ROOT="/home/srinithish/Documents/projects/E-commerce-Website/valux-store"
BACKEND_DIR="$PROJECT_ROOT/backend"
BACKEND_PORT=5000
FRONTEND_PORT=5173
LOOPHOLE_HOSTNAME="valuxstore67"

# Ensure we are in the right directory
cd "$PROJECT_ROOT" || exit 1

# Export PATH to ensure npm/node/loophole are found
# You might need to adjust this if using nvm or custom paths
export PATH=$PATH:/usr/local/bin:/usr/bin:/bin:/home/srinithish/.local/bin

# PIDs to track
BACKEND_PID=0
FRONTEND_PID=0
LOOPHOLE_PID=0

# Cleanup function for clean shutdown
cleanup() {
    echo "$(date): Shutting down Valux Store services..."
    [ $LOOPHOLE_PID -ne 0 ] && kill $LOOPHOLE_PID 2>/dev/null
    [ $FRONTEND_PID -ne 0 ] && kill $FRONTEND_PID 2>/dev/null
    [ $BACKEND_PID -ne 0 ] && kill $BACKEND_PID 2>/dev/null
    wait
    echo "$(date): Shutdown complete."
    exit 0
}

# Trap signals for clean shutdown
trap cleanup SIGTERM SIGINT

# Health check function
wait_for_port() {
    local port=$1
    local name=$2
    local timeout=60
    echo "$(date): Waiting for $name to be ready on port $port..."
    while ! nc -z localhost $port; do
        sleep 2
        ((timeout--))
        if [ $timeout -le 0 ]; then
            echo "$(date): ERROR: Timeout waiting for $name"
            cleanup
        fi
    done
    echo "$(date): $name is ready!"
}

# 1. Start Backend
echo "$(date): Starting Backend..."
cd "$BACKEND_DIR" || exit 1
NODE_ENV=development npm run dev > "$PROJECT_ROOT/backend.log" 2>&1 &
BACKEND_PID=$!

wait_for_port $BACKEND_PORT "Backend"

# 2. Start Frontend
echo "$(date): Starting Frontend..."
cd "$PROJECT_ROOT" || exit 1
NODE_ENV=development npm run dev -- --host --force > "$PROJECT_ROOT/frontend.log" 2>&1 &
FRONTEND_PID=$!

wait_for_port $FRONTEND_PORT "Frontend"

# 3. Start Loophole
echo "$(date): Starting Loophole..."
# We run loophole in the foreground (wait for it)
loophole http $FRONTEND_PORT --hostname $LOOPHOLE_HOSTNAME &
LOOPHOLE_PID=$!

echo "$(date): All services are up and running."

# Wait for the main process (loophole) or any signal
wait $LOOPHOLE_PID
cleanup

#!/usr/bin/env bash
set -euo pipefail

FRONTEND_DIR="/home/srinithish/Documents/projects/E-commerce-Website/valux-store"
BACKEND_DIR="$FRONTEND_DIR/backend"
NPM="/usr/local/bin/npm"
BACKEND_PID=""
FRONTEND_PID=""

cd "$BACKEND_DIR"
"$NPM" start &
BACKEND_PID=$!

cleanup() {
  if [[ -n "$FRONTEND_PID" ]]; then
    kill "$FRONTEND_PID" 2>/dev/null || true
  fi

  if [[ -n "$BACKEND_PID" ]]; then
    kill "$BACKEND_PID" 2>/dev/null || true
  fi
}

trap cleanup EXIT INT TERM

cd "$FRONTEND_DIR"
VALUX_DISABLE_HMR=1 "$NPM" run dev -- --host 0.0.0.0 --port 5173 &
FRONTEND_PID=$!

wait "$FRONTEND_PID"

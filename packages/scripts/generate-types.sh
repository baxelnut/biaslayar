#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

if [ -f "$ROOT/.env" ]; then
  set -a
  source <(tr -d '\r' < "$ROOT/.env")
  set +a
fi

: "${SUPABASE_PROJECT_ID:?SUPABASE_PROJECT_ID belum diatur di .env root}"

OUT="$ROOT/packages/shared/src/types/database.ts"
TMP="$(mktemp)"

pnpm dlx supabase gen types typescript --project-id "$SUPABASE_PROJECT_ID" --schema public > "$TMP"
mv "$TMP" "$OUT"

echo "Tersimpan: $OUT"
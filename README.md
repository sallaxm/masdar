# masdar

## Clean Code Guidelines

Use this repository with a "clean code first" mindset:

- Write small, focused functions and keep one responsibility per unit.
- Prefer clear names over short names (`total_price` instead of `tp`).
- Keep nesting shallow by returning early.
- Remove dead code and stale comments as part of every change.
- Add or update tests whenever behavior changes.
- Run formatting and linting before committing.

## Minimal Review Checklist

Before opening a PR, confirm:

1. The change is readable without extra explanation.
2. Repeated logic is extracted into a shared helper.
3. Edge cases are handled explicitly.
4. Documentation is updated when behavior changes.

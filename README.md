# Village SDK Events

Typed event registry and TypeScript definitions for [Village](https://village.do) widgets, integrations, and embedded apps.

This package provides a centralized and type-safe event system that allows developers to listen for and emit SDK lifecycle events with confidence and auto-completion.

---

## 📦 Installation

### From GitHub (recommended)

```bash
npm install git+https://github.com/VillageHQ/village-sdk-events.git
```

Or using Yarn:

```bash
yarn add git+https://github.com/VillageHQ/village-sdk-events.git
```

---

## 🚀 Usage

### 1. Import the event registry and types:

```ts
import { VillageEvents, type VillageEventMap } from "village-sdk-events";
```

### 2. Register event listeners

#### Using `window.Village.on(...)`:

```ts
window.Village?.on?.(VillageEvents.widgetReady, () => {
  console.log("✅ Widget is now ready");
});
```

#### Using `window.addEventListener(...)` (DOM event):

```ts
window.addEventListener(VillageEvents.widgetReady, (event: CustomEvent) => {
  console.log("🔔 DOM event received", event.detail);
});
```

### 3. Emit or broadcast events from the SDK

```ts
window.Village?.broadcast?.(VillageEvents.widgetError, {
  message: "Failed to load user graph",
  source: "paths",
  details: { userId: "abc123" }
});
```

---

## 📚 Supported Events

| Event                            | Triggered When...                                              | Payload Type                    |
|----------------------------------|----------------------------------------------------------------|----------------------------------|
| `village.widget.ready`           | Widget has been initialized                                   | `void`                          |
| `village.path.cta.clicked`       | CTA like “Send Intro” or “Save” is clicked                    | `{ action, data }`              |
| `village.user.synced`           | User’s network graph is fully synced                          | `{ userId, syncedAt }`          |
| `village.user.sync.failed`      | User sync failed (e.g. token expired, rate-limited)           | `{ reason }`                    |
| `village.oauth.started`         | OAuth popup opens                                             | `void`                          |
| `village.oauth.success`         | OAuth completed successfully                                  | `{ token }`                     |
| `village.oauth.error`           | OAuth failed or user closed popup                            | `{ error }`                     |
| `village.widget.error`          | Any unhandled internal error in the widget                    | `{ message, source, details? }` |

---

## 🧪 Type Safety

The `VillageEventMap` interface provides fully typed payloads per event:

```ts
function emit<K extends keyof VillageEventMap>(
  event: K,
  data: VillageEventMap[K]
) {
  // safe and typed
}
```

---

## 🧱 Why this exists

This package was created to standardize how Village events are:

- Documented
- Dispatched across multiple platforms (Web, Widget, Admin)
- Handled consistently with type safety and auto-completion

---

## 👨‍💻 Maintainer

**Daniel Neto**  
[https://github.com/VillageHQ](https://github.com/VillageHQ)
# 🧩 Village SDK Events

Typed event registry and TypeScript contracts for [Village](https://village.do) widgets, partner integrations, and embedded apps.

This package enables a **centralized and type-safe event system**, allowing developers to reliably `emit` and `listen` to lifecycle events across Village components.

---

## 📦 Installation

Install from GitHub:

```bash
npm install git+https://github.com/VillageHQ/village-sdk-events.git
```

Or using Yarn:

```bash
yarn add git+https://github.com/VillageHQ/village-sdk-events.git
```

---

## 🚀 Usage

### 1. Import the registry and types

```ts
import {
  VillageEvents,
  type VillageEventMap,
  type VillageEventName
} from "village-sdk-events";
```

### 2. Type-safe usage with `on` and `emit`

```ts
Village.on(VillageEvents.widgetReady, () => {
  console.log("✅ Widget is ready!");
});

Village.emit(VillageEvents.userSynced, {
  userId: "abc123",
  syncedAt: new Date().toISOString(),
});
```

All event names and payloads are fully typed.

---

## 📚 Supported Events

| Event                           | Description                                  | Payload                           |
|--------------------------------|----------------------------------------------|-----------------------------------|
| `village.path.cta.clicked`     | User clicked a CTA inside the widget         | `{ action, data }`                |
| `village.paths_cta.updated`    | CTA list dynamically updated                 | _custom_                          |
| `village.user.synced`          | User graph sync completed                    | `{ userId, syncedAt }`            |
| `village.user.sync.failed`     | Sync failed due to error                     | `{ reason }`                      |
| `village.oauth.started`        | OAuth popup opened                           | `void`                            |
| `village.oauth.success`        | OAuth completed with token                   | `{ token }`                       |
| `village.oauth.error`          | OAuth failed or cancelled                    | `{ error }`                       |
| `village.widget.error`         | Internal error occurred                      | `{ message, source, details? }`   |
| `village.widget.ready`         | Widget was initialized successfully          | `void`                            |

---

## 📥 Listening from iframe or host

### From inside the widget (or script):

```ts
Village.on(VillageEvents.pathCtaClicked, ({ action, data }) => {
  console.log("CTA Clicked:", action, data.introducer.email);
});
```

### From parent window (iframe-safe):

```ts
window.addEventListener("message", (event) => {
  if (event.data?.source !== "VillageSDK") return;

  const { type, payload } = event.data;
  if (type === VillageEvents.widgetError) {
    console.error("Widget error:", payload.message);
  }
});
```

---

## 🧪 Type Safety

You can use `VillageEventMap` to type custom logic:

```ts
function emitTyped<K extends keyof VillageEventMap>(
  event: K,
  data: VillageEventMap[K]
) {
  Village.emit(event, data);
}
```

The `VillageEvents` registry ensures event names are consistent across all modules.

---

## 🧱 Why this package exists

This module:

- ✅ Provides a shared contract between SDKs, widgets, and admin apps
- ✅ Eliminates typos and invalid event usage
- ✅ Supports autocompletion and static validation via TypeScript
- ✅ Simplifies third-party integration

---

## 👨‍💻 Maintainer

**Daniel Neto**  
Founder & Core Developer  
[https://github.com/VillageHQ](https://github.com/VillageHQ)

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VillageEvents = void 0;
/**
 * Registry of supported Village SDK events and their payloads.
 * Used for typed emit/on listener logic in partner integrations.
 *
 * Example usage:
 *
 *   Village.on(VillageEvents.pathCtaClicked, (payload) => {
 *     console.log("CTA clicked:", payload);
 *   });
 *
 *   Village.emit(VillageEvents.userSynced, {
 *     userId: "abc123",
 *     syncedAt: new Date().toISOString(),
 *   });
 */
exports.VillageEvents = {
    // 🔗 CTA interactions
    pathCtaClicked: "village.path.cta.clicked",
    // 👤 User sync events
    userSynced: "village.user.synced",
    userSyncFailed: "village.user.sync.failed",
    // 🔐 OAuth flow events
    oauthStarted: "village.oauth.started",
    oauthSuccess: "village.oauth.success",
    oauthError: "village.oauth.error",
    // ⚠️ General widget error
    widgetError: "village.widget.error",
    /** Fired when the widget (App) has been initialized and is ready. */
    widgetReady: "village.widget.ready",
};

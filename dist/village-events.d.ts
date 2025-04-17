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
export declare const VillageEvents: {
    readonly pathCtaClicked: "village.path.cta.clicked";
    readonly pathsCtaUpdated: "village.paths_cta.updated";
    readonly userSynced: "village.user.synced";
    readonly userSyncFailed: "village.user.sync.failed";
    readonly oauthStarted: "village.oauth.started";
    readonly oauthSuccess: "village.oauth.success";
    readonly oauthError: "village.oauth.error";
    readonly widgetError: "village.widget.error";
    /** Fired when the widget (App) has been initialized and is ready. */
    readonly widgetReady: "village.widget.ready";
};
/**
 * A union of all valid Village event names, inferred from VillageEvents.
 *
 * Example:
 *   function emit<K extends VillageEventName>(event: K, data: VillageEventMap[K]) { ... }
 */
export type VillageEventName = typeof VillageEvents[keyof typeof VillageEvents];
/**
 * Typed payloads for each Village SDK event.
 */
export interface VillageEventMap {
    /**
     * Fired when a CTA (e.g., "Send Intro", "Save to CRM") is clicked.
     *
     * Example:
     *   Village.on(VillageEvents.pathCtaClicked, ({ action, data }) => {
     *     console.log("CTA", action, "clicked by", data.introducer.email);
     *   });
     */
    [VillageEvents.pathCtaClicked]: {
        action: string;
        data: {
            introducer: {
                name: string;
                email: string;
            };
            timestamp: string;
            callbackName?: string;
        };
    };
    /**
     * Fired when a user's graph/network has been successfully flattened.
     *
     * Example:
     *   Village.on(VillageEvents.userSynced, ({ userId }) => {
     *     console.log("User synced:", userId);
     *   });
     */
    [VillageEvents.userSynced]: {
        userId: string;
        syncedAt: string;
    };
    /**
     * Fired when the sync fails (e.g., token expired, rate-limited, etc).
     *
     * Example:
     *   Village.on(VillageEvents.userSyncFailed, ({ reason }) => {
     *     alert("Sync failed: " + reason);
     *   });
     */
    [VillageEvents.userSyncFailed]: {
        reason: string;
    };
    /**
     * Fired when the OAuth flow starts and popup is opened.
     *
     * Example:
     *   Village.on(VillageEvents.oauthStarted, () => {
     *     console.log("OAuth popup opened");
     *   });
     */
    [VillageEvents.oauthStarted]: void;
    /**
     * Fired when OAuth login completes successfully.
     *
     * Example:
     *   Village.on(VillageEvents.oauthSuccess, ({ token }) => {
     *     console.log("OAuth success with token:", token);
     *   });
     */
    [VillageEvents.oauthSuccess]: {
        token: string;
    };
    /**
     * Fired when OAuth flow fails or user closes the popup.
     *
     * Example:
     *   Village.on(VillageEvents.oauthError, ({ error }) => {
     *     console.error("OAuth failed:", error);
     *   });
     */
    [VillageEvents.oauthError]: {
        error: string;
    };
    /**
     * Fired when an unhandled error happens in the widget.
     *
     * Example:
     *   Village.on(VillageEvents.widgetError, ({ message }) => {
     *     console.error("Widget error:", message);
     *   });
     */
    [VillageEvents.widgetError]: {
        message: string;
        source: string;
        details?: any;
    };
    /**
     * Fired when the widget (App) has been initialized and is ready.
     *
     * Example:
     *   Village.on(VillageEvents.widgetReady, () => {
     *     console.log("Widget is now ready!");
     *   });
     */
    [VillageEvents.widgetReady]: void;
}

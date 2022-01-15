// Definitions by: Steve Junior <https://github.com/stevejunior>

/**
 * Injects TawkTo plugin into react DOM
 *
 * @param string propertyId
 * @param string widgetId
 * are available in TawkTo dashboard
 *
 * @param string zIndex
 * Add style to the widget. Only zIndex is currently supported
 */
class TawkTo {
  constructor(propertyId, widgetId, zIndex = null) {
    this._Tawk = this.init(propertyId, widgetId, zIndex);
  }

  init(propertyId, widgetId, zIndex) {
    if (!window) {
      throw new Error("Unvailable DOM");
    }

    let id = "_t_a_w_k";
    if (document.getElementById(id) === null) {
      // Prevent TawkTo from creating more instances if it already exists
      const element = document.createElement("script");
      element.id = id;
      element.async = true;
      element.src = "https://embed.tawk.to/" + propertyId + "/" + widgetId;
      element.char = "UTF-8";
      element.setAttribute("crossorigin", "*");

      const node = document.getElementsByTagName("script")[0];
      if (!node || !node.parentNode) {
        throw new Error("Unavailable DOM");
      }

      node.parentNode.insertBefore(element, node);
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    var tawk = window.Tawk_API;

    if (zIndex) {
      tawk.customStyle = { zIndex: zIndex };
    }

    return tawk;
  }

  /**
   * Hook into Tawk events
   */

  /**
   * Callback function invoked right after the widget is rendered.
   * @returns void
   */
  onLoad(callback) {
    this._Tawk.onLoad = () => callback();
  }

  /**
   * Callback function invoked when the page status changes. The function will receive the changed status which will be either online, away or offline.
   * @returns void
   */
  onStatusChange(callback) {
    this._Tawk.onStatusChange = (status) => callback(status);
  }

  /**
   * Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered.
   * @returns void
   */
  onBeforeLoad(callback) {
    this._Tawk.onBeforeLoad = () => callback();
  }

  /**
   * Callback function invoked when the widget is maximized.
   * @returns void
   */
  onChatMaximized(callback) {
    this._Tawk.onChatMaximized = () => callback();
  }

  /**
   * Callback function invoked when the widget is minimized.
   * @returns void
   */
  onChatMinimized(callback) {
    this._Tawk.onChatMinimized = () => callback();
  }

  /**
   * Callback function invoked when the widget is hidden.
   * @returns void
   */
  onChatHidden(callback) {
    this._Tawk.onChatHidden = () => callback();
  }

  /**
   * Callback function invoked when the widget is started.
   * @returns void
   */
  onChatStarted(callback) {
    this._Tawk.onChatStarted = () => callback();
  }

  /**
   * Callback function invoked when the widget is ended.
   * @returns void
   */
  onChatEnded(callback) {
    this._Tawk.onChatEnded = () => callback();
  }

  /**
   * Callback function invoked when the Pre-Chat Form is submitted.
   * @returns void
   */
  onPrechatSubmit(callback) {
    this._Tawk.onPrechatSubmit = (data) => callback(data);
  }

  /**
   * Callback function invoked when the Offline form is submitted.
   * @returns void
   */
  onOfflineSubmit(callback) {
    this._Tawk.onOfflineSubmit = (data) => callback(data);
  }

  /**
   * Callback function invoked when message is sent by the visitor.
   * @returns void
   */
  onChatMessageVisitor(callback) {
    this._Tawk.onChatMessageVisitor = (message) => callback(message);
  }

  /**
   * Callback function invoked when message is sent by the agent.
   * @returns void
   */
  onChatMessageAgent(callback) {
    this._Tawk.onChatMessageAgent = (message) => callback(message);
  }

  /**
   * Callback function invoked when message is sent by the system.
   * @returns void
   */
  onChatMessageSystem(callback) {
    this._Tawk.onChatMessageSystem = (message) => callback(message);
  }

  /**
   * Callback function invoked when an agent joins the chat.
   * @returns void
   */
  onAgentJoinChat(callback) {
    this._Tawk.onAgentJoinChat = (data) => callback(data);
  }

  /**
   * Callback function invoked when an agent leaves the chat.
   * @returns void
   */
  onAgentLeaveChat(callback) {
    this._Tawk.onAgentLeaveChat = (data) => callback(data);
  }

  /**
   * Callback function invoked when an agent leaves the chat. The satisfaction is passed to the callback. -1 = dislike | 0 = neutral | 1 = like.
   * @returns void
   */
  onChatSatisfaction(callback) {
    this._Tawk.onChatSatisfaction = (satisfaction) => callback(satisfaction);
  }

  /**
   * Callback function invoked when the visitor manually changes his name.
   * @returns void
   */
  onVisitorNameChanged(callback) {
    this._Tawk.onVisitorNameChanged = (visitorName) => callback(visitorName);
  }

  /**
   * Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the callback.
   * @returns void
   */
  onFileUpload(callback) {
    this._Tawk.onFileUpload = (link) => callback(link);
  }

  /**
   * Callback function invoked when a tag is updated.
   * @returns void
   */
  onTagsUpdated(callback) {
    this._Tawk.onTagsUpdated = (data) => callback(data);
  }

  /**
   * Maximizes the chat widget.
   * @returns void
   */
  maximize() {
    if (this._Tawk.maximize !== undefined) {
      this._Tawk.maximize();
    }
  }

  /**
   * Minimises the chat widget.
   * @returns void
   */
  minimize() {
    if (this._Tawk.minimize !== undefined) {
      this._Tawk.minimize();
    }
  }

  /**
   * Minimizes or Maximizes the chat widget based on the current state.
   * @returns void
   */
  toggle() {
    if (this._Tawk.toggle !== undefined) {
      this._Tawk.toggle();
    }
  }

  /**
   * Opens the chat widget as a pop out.
   * @returns void
   */
  popup() {
    if (this._Tawk.popup !== undefined) {
      this._Tawk.popup();
    }
  }

  /**
   * Returns the current widget type whether it’s inline or embed.
   * @returns {string}
   */
  getWindowType() {
    return this._Tawk.getWindowType === undefined
      ? ""
      : this._Tawk.getWindowType();
  }

  /**
   * Shows the chat widget.
   * @returns void
   */
  showWidget() {
    if (this._Tawk.showWidget !== undefined) {
      this._Tawk.showWidget();
    }
  }

  /**
   * Hides the chat widget.
   * @returns void
   */
  hideWidget() {
    if (this._Tawk.hideWidget !== undefined) {
      this._Tawk.hideWidget();
    }
  }

  /**
   * Hides or Shows the chat widget based on the current visibility state.
   * @returns void
   */
  toggleVisibility() {
    if (this._Tawk.toggleVisibility !== undefined) {
      this.toggleVisibility();
    }
  }

  /**
   * Returns the current page status (online, away or offline).
   * @returns {string}
   */
  getStatus() {
    return this._Tawk.getStatus === undefined ? false : this._Tawk.getStatus();
  }

  /**
   * Returns a boolean value (true or false) indicating whether the chat widget is maximized.
   * @returns boolean
   */
  isChatMaximized() {
    return this._Tawk.isChatMaximized === undefined
      ? false
      : this._Tawk.isChatMaximized();
  }

  /**
   * Returns a boolean value (true or false) indicating whether the chat widget is minimized.
   * @returns boolean
   */
  isChatMinimized() {
    return this._Tawk.isChatMinimized === undefined
      ? false
      : this._Tawk.isChatMinimized();
  }

  /**
   * Returns a boolean value (true or false) indicating whether the chat widget is hidden.
   * @returns boolean
   */
  isChatHidden() {
    return this._Tawk.isChatHidden === undefined
      ? false
      : this._Tawk.isChatHidden();
  }

  /**
   * Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.
   * @returns boolean
   */
  isChatOngoing() {
    return this._Tawk.isChatOngoing === undefined
      ? false
      : this._Tawk.isChatOngoing();
  }

  /**
   * Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has requested a chat.
   * @returns boolean
   */
  isVisitorEngaged() {
    return this._Tawk.isVisitorEngaged === undefined
      ? false
      : this._Tawk.isVisitorEngaged();
  }

  /**
   * Ends the current ongoing chat.
   * @returns void
   */
  endChat() {
    if (this._Tawk.endChat !== undefined) {
      this._Tawk.endChat();
    }
  }

  /**
   * Set custom metadata regarding this chat/visitor.
   * @param object attribute
   * @param function callback
   * @returns void
   */
  setAttributes(attribute, callback) {
    if (this._Tawk.setAttributes !== undefined) {
      this._Tawk.setAttributes(attribute, callback);
    }
  }

  /**
   * Set a custom event to chat.
   * @param string name
   * @param object data optional
   * @param function callback
   * @returns void
   */
  addEvent(name, callback, data = null) {
    if (this._Tawk.addEvent !== undefined) {
      if (data === null) {
        this._Tawk.addEvent(name, callback);
      } else {
        this._Tawk.addEvent(name, data, callback);
      }
    }
  }

  /**
   * Add tags to the chat.
   * @param array tags
   * @param function callback
   * @returns void
   */
  addTags(tags, callback) {
    if (this._Tawk.addTags !== undefined) {
      this._Tawk.addTags(tags, callback);
    }
  }

  /**
   * Remove tags from the chat.
   * @param array tags
   * @param function callback
   * @returns void
   */
  removeTags(tags, callback) {
    if (this._Tawk.removeTags !== undefined) {
      this._Tawk.removeTags(tags, callback);
    }
  }
}

module.exports = TawkTo;

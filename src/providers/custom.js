import settings from '$lib/settings/Settings.svelte.js';
import Provider from './provider.js';

class Custom extends Provider
{
    id = "custom";
    name = "Custom (OpenAI API)";
    keys = "";
    models = "";
    keyPlaceholder = "Base URL (e.g. http://192.168.30.152:1234)";

    getBaseUrl()
    {
        return (settings.Data.customKey || "").replace(/\/+$/, "");
    }

    GetFetchUrl()
    {
        return this.getBaseUrl() + "/v1/models";
    }

    GetFetchHeaders()
    {
        return {
            "Content-Type" : "application/json"
        };
    }

    GetModelUrl()
    {
        return this.getBaseUrl() + "/v1/chat/completions";
    }

    GetModelHeaders()
    {
        return {
            "Content-Type" : "application/json"
        };
    }
}

export default new Custom();

import env from "../utils/env-utils";

const CONFIG = Object.freeze({
  PORT: env("PORT", 8000).toInt(),
});

export default CONFIG;

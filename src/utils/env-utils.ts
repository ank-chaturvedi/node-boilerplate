class Env {
  private name: string;
  private value: unknown;
  private defaultValue: unknown;

  constructor(name: string, defaultValue?: unknown) {
    this.name = name;
    this.value = this.getFromEnv();
    this.defaultValue = defaultValue;
  }

  private getFromEnv() {
    return process.env[this.name];
  }

  toString() {
    return String(this.value || this.defaultValue);
  }

  toInt() {
    return parseInt(this.toString());
  }

  toFloat() {
    return parseFloat(this.toString());
  }

  toNumber() {
    return Number(this.value);
  }
}

function env(name: string, defaultValue?: unknown) {
  return new Env(name, defaultValue);
}

export default env;

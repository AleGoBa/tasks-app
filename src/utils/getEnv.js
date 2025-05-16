export default function (key) {
    return import.meta.env[key] ?? null;
}

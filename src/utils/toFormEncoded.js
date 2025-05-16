export default function (json) {
    if (json instanceof URLSearchParams) {
        return json;
    }

    const params = new URLSearchParams();

    Object.entries(json).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((v) => params.append(`${key}[]`, v));
        } else {
            params.append(key, value);
        }
    });

    return params;
}

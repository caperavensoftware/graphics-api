export class BaseFeature {
    /**
     * Register feature with features collection
     * @param collection {array}
     * @returns {Promise<void>}
     */
    static async register(collection, type) {
        return Promise.resolve().then(() => {
            const instance = new type();
            collection.push(instance);
        })
    }

    /**
     * Unregister feature from features collection
     * @param collection {array}
     * @returns {Promise<void>}
     */
    static async unregister(collection, type) {
        return Promise.resolve().then(() => {
            let foundIndex = -1;
            collection.find((item, index) => {
                if (item instanceof(type)) {
                    foundIndex = index;
                }
            });

            if (foundIndex != -1) {
                collection.splice(foundIndex, 1);
            }
        });
    }

    /**
     * Override this function for feature rendering
     */
    render() {
    }
}
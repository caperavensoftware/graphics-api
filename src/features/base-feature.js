export class BaseFeature {
    /**
     * Register feature with features collection
     * @param collection {array}
     * @returns {Promise<void>}
     */
    static async register(collection, type) {
        const instance = new type();
        collection.push(instance);
    }

    /**
     * Unregister feature from features collection
     * @param collection {array}
     * @returns {Promise<void>}
     */
    static async unregister(collection, type) {
        let foundIndex = -1;
        collection.find((item, index) => {
            if (item instanceof(type)) {
                foundIndex = index;
            }
        });

        if (foundIndex != -1) {
            collection.splice(foundIndex, 1);
        }
    }

    render() {

    }
}
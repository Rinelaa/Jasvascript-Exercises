class TemporaryCache {
    constructor() {
        this.cache = new Map();
    }
    
    set(key, value, duration) {
        const now = Date.now();
        const isUnexpiredKey = this.cache.has(key) && this.cache.get(key).expiryTime > now;

        this.cache.set(key, { value, expiryTime: now + duration });
        return isUnexpiredKey ;
    }
    
    get(key) {
        const item = this.cache.get(key);
        if (item && item.expiryTime > Date.now()) {
            return item.value;
        }
        return -1;
    }
    
    count() {
        this.cleanup();
        return this.cache.size;
    }
    
    cleanup() {
        const now = Date.now();
        for (const [key, { expiryTime }] of this.cache) {
            if (expiryTime <= now) {
                this.cache.delete(key);
            }
        }
    }
}

const cache = new TemporaryCache ();

console.log(cache.set(1, 100, 5000)); 
console.log(cache.get(1)); 
console.log(cache.count()); 

setTimeout(() => {
    console.log(cache.get(1)); 
    console.log(cache.count()); 
}, 6000); 


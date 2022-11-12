class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log("Instance S1 and S2 are equal ? ", s1 === s2);
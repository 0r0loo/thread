import AsyncStorage from '@react-native-community/async-storage';

const key = 'threads';

const threadsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (error) {
      throw new Error(`Failed to load threads ${error}`);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      throw new Error(`Failed to save threads ${error}`);
    }
  },
};

export default threadsStorage;

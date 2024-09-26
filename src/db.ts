import chalk from 'chalk';
import mongoose from 'mongoose';
import { initializeData } from './initial-data/initial-data.service';
const connectDB = async () => {
 try {
    const uri: string = process.env.ENV_MODE as string == "develop" ?
        process.env.MONGODB_URI as string 
        :
        process.env.MONGO_ATLAS as string ;
    if (!uri) {
      throw new Error('MongoDB connection string is not defined.');
    }
    await mongoose.connect(uri);
    await initializeData()
    console.log(chalk.green('MongoDB connected'));

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;

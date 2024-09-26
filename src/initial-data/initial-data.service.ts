import Card from "../models/Card";
import User  from "../models/User";
import { initialData as data } from '../initial-data/initial-data';
import bcrypt from 'bcryptjs';
import { IUser } from "../models/User";
import { ICard } from "../models/Card";
export const initializeData = async () => {
    // Get the count of existing users
    const userAmount: number = await User.countDocuments();

    if (userAmount === 0) {
        const userIds: string[] = [];

        // Create users from the initial data
        for (const u of data.users) {
            const user: IUser = new User(u);
            user.password = await bcrypt.hash(user.password, 10);
            const obj: IUser = await user.save();

            if (obj.isBusiness || obj.isAdmin) {
                userIds.push(obj._id as string);
            }
        }

        // Create cards and assign a random user
        for (const c of data.cards) {
            const card: ICard = new Card(c);
            if (userIds.length > 0) {
                const randomIndex: number = Math.floor(Math.random() * userIds.length);
                card.user_id = userIds[randomIndex];
            }
            await card.save();
        }
    }
};

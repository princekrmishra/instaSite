import { mutation, query } from "./_generated/server";
import { v } from 'convex/values';

export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        uid: v.string()
    },
    handler: async (ctx, args) => {
        // Check if user already exists 
        const user = await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.email)).collect();
        console.log('Existing users:', user);
        
        // If user doesn't exist, create new user
        if (user?.length == 0) {
            const result = await ctx.db.insert('users', {
                name: args.name,
                picture: args.picture,
                email: args.email,
                uid: args.uid,
                token: 500000
            });
            console.log('New user created:', result);
            return result; // Return the new user ID
        } else {
            console.log('User already exists');
            return user[0]; // Return the existing user
        }
    }
});

export const GetUser = query({
    args: {
        email: v.string()
    },
    handler: async(ctx, args) => {
        const user = await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.email)).collect();
        return user[0];
    }
})

export const UpdateToken = mutation({
    args: {
        token: v.number(),
        userId: v.id('users')
    },
    handler: async(ctx, args) => {
        const result = await ctx.db.patch(args.userId, {
            token: args.token
        });
        return result;
    }
})
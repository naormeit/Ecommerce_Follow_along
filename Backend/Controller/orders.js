


router.get('/my-orders', async (req, res) => {
    try {
        const {email} = req.query;

        if(!email){
            return res.status(400).json({message:"Email is required"});
        }

        const user = await User.findOne({email});
        
        if(!user){
            return.res.status(400).json({message: 'User not found'});
        }

        const orders = await Order.find({user: user_id});

        res.status(200).json({orders});

    } catch (error) {
        console.error('error fetching orders:', error);
        res.status(500).json({message: error.message})
    }

    });
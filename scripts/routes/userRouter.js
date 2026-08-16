// routes/userRouter.js
const express = require('express');
const router = express.Router();

router.post('/api/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// ROUTE: READ all users GET /api/users
router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, count: users.length, data: users
    });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
// ROUTE: READ one user GET /api/users/:id
router.get('/api/users/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.id);
    if (!user)
        return res.status(404).json({ success: false, message: 'User not found' });
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
// ROUTE: UPDATE a user PUT /api/users/:id
router.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!user)
        return res.status(404).json({ success: false, message: 'User not found' });
        res.status(200).json({ success: true, data: user});
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});


// ROUTE: DELETE a user DELETE /api/users/:id
router.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user)
            return res.status(404).json({ success: false, message: 'User not found' });
            res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


module.exports = router;
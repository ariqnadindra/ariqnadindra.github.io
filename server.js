const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/blogs', (req, res) => {
    const postsDirectory = path.join(__dirname, 'posts');
    fs.readdir(postsDirectory, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read posts directory' });
        }

        const blogs = files.map(file => {
            const filePath = path.join(postsDirectory, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const [title, ...body] = content.split('\n');
            const excerpt = body.join(' ').substring(0, 100);

            return {
                title: title.replace('# ', ''),
                excerpt: excerpt + '...',
                url: `/posts/${file}`
            };
        });

        res.json(blogs);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
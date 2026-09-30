const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/lokasi", async (req, res) => {

    const lokasi = req.query.lokasi;

    const apiKey = "TmW3n2IbOKaZxkghOoYB";

    if (!lokasi) {
        return res.status(400).json({
            message: "Lokasi belum diisi"
        });
    }

    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(lokasi)}.json?key=${apiKey}`;


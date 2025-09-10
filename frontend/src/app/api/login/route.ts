import axios from "axios";
import { any } from "zod";

export async function POST(request: Request) {
    console.log("request body ", request.body);
    const body = await request.json();
    const { email } = body;

    const response = await axios.post(
        'http://localhost:3001/auth/login',
        {email},
        { withCredentials: true }
    );
    const newUser = { id: Date.now(), "ashutosh":any};
    
    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json'}
    });
}
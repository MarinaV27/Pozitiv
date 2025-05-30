import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { getAllContacts, getContactById } from './services/contacts.js';


const PORT = Number(getEnvVar('PORT', '3000'));



export const setupServer = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    
    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            },
        }),
    );

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello world!',
        });
    });

    app.get('/contacts', async (req, res) => {
        const contacts = await getAllContacts();

        res.status(200).json({
            status: 200,
            message: "Successfully created a contact!",
            data: contacts,
        });
    });

    app.get('/contacts/:contactId', async (req, res) => {
        const { contactId } = req.params;
        const contact = await getContactById(contactId);

        // Відповідь, якщо контакт не знайдено
        if (!contact) {
            res.status(404).json({
                status: 404,
                message: 'Contact not found',
            });
            return;
        }

        // Відповідь, якщо контакт знайдено
        res.status(200).json({
            status: 200,
            message: `Successfully found contact with id ${contactId}`,
            data: contact,
        });
    });

    app.use('*', (req, res) => {
        res.status(404).json({
            message: 'Not found',
        });
    });

   

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

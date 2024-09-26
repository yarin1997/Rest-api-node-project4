import { Router } from "express";
import { authCreate, authDeleteCard, authEditCard, authGetAllCards, authGetCardById, authGetMyCards, authUpdateBizNumber } from "../middleware/cardsAuth";
import { changeBizNumber, createNewCard, deleteCard, editCard, getAllCards, getCardById, getMyCards, likeCard } from "../controllers/cardController";


const cardRouter= Router();

cardRouter.get('/cards' , authGetAllCards, getAllCards);
cardRouter.get('/cards/my-cards', authGetMyCards, getMyCards);
cardRouter.get('/card/:id', authGetCardById, getCardById );
cardRouter.post('/card', authCreate, createNewCard)
cardRouter.put('/card/:id', authEditCard, editCard)
cardRouter.patch('/card/:id', authEditCard, likeCard)
cardRouter.patch('/card/biz-number/:id', authUpdateBizNumber, changeBizNumber)
cardRouter.delete('/card/:id', authDeleteCard, deleteCard)

export default cardRouter;
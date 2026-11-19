import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../Stores/userStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
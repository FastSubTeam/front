import { atom } from 'recoil';
import { TSearchOptions } from '@/types/TSearchOptions';
import { TEventForm } from '@/types/TEventForm';

export const eventFormState = atom<TEventForm>({
  key: 'eventFormState',
  default: {
    id: '',
    name: '',
    description: '',
    city: '',
    district: '',
    category: '카테고리',
    thumbnailUrl: '',
    startDate: '',
    endDate: '',
  },
});

export const searchOptionState = atom<TSearchOptions>({
  key: 'searchOptionState',
  default: {
    city: '',
    district: '',
    category: '',
  },
});

export const participateState = atom({
  key: 'participateState',
  default: false,
});

export const totalEventsState = atom({
  key: 'totalEventsState',
  default: 0,
});

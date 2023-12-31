import { IEvent } from '@/types/IEvent';
import Status from '@/components/ui/Status';
import { formatDate } from '@/utils/community/dateFormat';
import EventButton from '@/components/events/EventButton';

export default function EventDetailBox({
  ...props
}: Omit<IEvent, 'discription' | 'participants'>) {
  return (
    <div className="mb-8 flex max-w-[1200px] flex-col justify-between rounded-md border border-subTextAndBorder px-4 py-8 drop-shadow-md sm:mx-auto sm:mb-16 sm:px-8 sm:py-12 lg:px-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="pb-2 text-sm text-subTextAndBorder sm:pb-2 sm:text-xl">
            {props.category}
          </div>
          <div className="pb-2 text-2xl font-bold sm:text-4xl lg:text-5xl">
            {props.name}
          </div>
          <div className="text-sm text-gray-500  lg:text-xl">
            {props.city} {props.district}
          </div>

          <div className="border-accent pb-2 text-base sm:mb-4 lg:text-xl">
            셀러 {props.nickname}
          </div>
        </div>

        <div className="flex flex-col">
            <div className="flex justify-end text-xl font-semibold text-accent sm:text-2xl">
              <Status status={props.status} />
            </div>
            <div className="text-slate-600 flex justify-end">행사 기간</div>
            <div className="sm:mb-2 text-xs sm:text-base lg:text-xl flex justify-end">
              {formatDate(props.startDate)} - {''}
              {formatDate(props.endDate)}
            </div>
        </div>
      </div>
      <EventButton
        isOwner={props.isOwner}
        isParticipant={props.isParticipant}
      />
    </div>
  );
}

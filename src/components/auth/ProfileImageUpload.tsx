/* eslint-disable no-unused-vars */
import dummyProfile from '@/assets/dummy-profile.png';

interface ImageUploadProps {
  imageURL?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileImageUpload({
  imageURL,
  handleChange,
}: ImageUploadProps) {
  return (
    <div className="flex w-36 justify-center rounded-md border-2 border-subTextAndBorder transition hover:border-accent hover:shadow-md active:scale-95">
      <label className="flex w-32 cursor-pointer flex-col items-center rounded-lg bg-white">
        <img
          src={imageURL === 'profileDefaultImageUrl' ? dummyProfile : imageURL}
          alt="profile"
          className="m-6 h-20 w-20 rounded-full object-cover shadow-md"
        />
        <span className="p-2 text-sm text-subTextAndBorder">
          프로필 사진 선택
        </span>
        <input
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="image/*"
        />
      </label>
    </div>
  );
}

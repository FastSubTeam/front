import { apiInstance } from '@/api/axios';
import IAdminSurveyRequest from '@/types/IAdminSurveyRequest';
import IResponse from '@/types/IResponse';
import IAdminSurvey from '@/types/IAdminSurvey';

// * 수요조사 등록
export const insertAdminSurvey = async (survey: IAdminSurveyRequest) => {
  const response = await apiInstance.post('/admin/survey', survey);
  return response.data;
};

// * 수요조사 목록 조회
export const fetchAdminSurvey = async (): Promise<
  IResponse<IAdminSurvey[]>
> => {
  const response = await apiInstance.get('/admin/survey');
  return response.data as IResponse<IAdminSurvey[]>;
};

// * 수요조사 삭제
export const deleteAdminSurvey = async (surveyId: number) => {
  const response = await apiInstance.delete(`/admin/survey/${surveyId}`);
  return response.data;
};

// * 수요조사 상세 조회
export const getSurveyDetail = async (
  surveyId: number,
): Promise<IResponse<IAdminSurvey>> => {
  const response = await apiInstance.get(`/admin/survey/${surveyId}`);
  return response.data as IResponse<IAdminSurvey>;
};

// * 수요조사 수정
export const modifySurvey = async (survey: IAdminSurvey) => {
  const response = await apiInstance.put(`/admin/survey/${survey.id}`, survey);
  return response.data;
};

// 롤확인(어드민 여부 확인)
export const getRole = async () => {
  const response = await apiInstance('/test');
  return response.data;
};

import { ISellerSignupRequestBody, ISignupRequestBody } from '@/types/ISignUp';
import { apiInstance } from '../axios';

export async function signup(signupData: ISignupRequestBody) {
  const response = await apiInstance.post('/auth/signup', signupData);
  return response.data;
}

export async function verifyEmailOrNickname(
  email?: string,
  nickname?: string,
  isSeller?: boolean,
) {
  const url = email
    ? `/auth/check-duplication?email=${email}&role=${isSeller ? 'seller' : ''}`
    : `/auth/check-duplication?nickname=${nickname}&role=${
        isSeller ? 'seller' : ''
      }`;
  const response = await apiInstance(url);
  return response.data;
}

export async function verifyEemail(email: string, registerToken: string) {
  const response = await apiInstance.post('/auth/verify-email', {
    email,
    registerToken,
  });
  // reponse.data에 안담아줬음
  return response;
}

export async function checkProceed(email: string) {
  const response = await apiInstance.post('/auth/check-proceed', {
    email,
  });
  return response.data;
}

export async function regenerateRegisterToken(email: string) {
  const response = await apiInstance.post('/auth/regenerate-token', {
    email,
  });
  return response.data;
}

export async function confirmBusinessNumber(businessNumber: string) {
  const response = await apiInstance.post('/auth/validate-business-number', {
    b_no: [businessNumber],
  });
  return response.data;
}

export async function sellerSignup(signupData: ISellerSignupRequestBody) {
  const response = await apiInstance.post('/auth/signup/seller', signupData);
  // reponse.data에 안담아줬음
  return response;
}

export async function checkBusinessNumberDup(businessNumber: string) {
  const response = await apiInstance.post('/auth/seller/check-businessNumber', {
    businessNumber,
  });
  return response.data;
}

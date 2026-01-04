export class ServiceClientOutputDto<Contextdto> {
  context: Contextdto;
  status: 'SUCCEED' | 'FAILED' | null;
  code: number | null;
  message?: string | null;
  error?: string | null;
  data?: any;
}

export interface InviterDto {
  nickname: string;
  email: string;
  id: number;
}

export interface DashboardDto {
  title: string;
  id: number;
}

export interface InviteeDto {
  nickname: string;
  email: string;
  id: number;
}

export interface InvitationsDto {
  id: number;
  inviter: InviterDto;
  teamId: string;
  dashboard: DashboardDto;
  invitee: InviteeDto;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InvitationsResponseDto {
  cursorId: number;
  invitations: InvitationsDto[];
}

export interface InvitationResponseRequestDto {
  teamId: string;
  invitationId: number;
}

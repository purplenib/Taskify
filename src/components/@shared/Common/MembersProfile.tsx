import { Avatar } from '@mantine/core';
import Image from 'next/image';

import { useRoot } from '@core/contexts/RootContexts';
import useDashboardMembers from '@lib/hooks/useDashboardMembers';
import useDevice, { DEVICE } from '@lib/hooks/useDevice';
import cn from '@lib/utils/cn';

function getMemberLengthByDevice(device: keyof typeof DEVICE) {
  if (device === 'desktop') return 4;
  return 2;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMemberMoreLength(arr: any[] | undefined, profileCount: number) {
  if (!arr) return 0;
  const moreLength = arr.length - profileCount;
  if (moreLength < 1) return 0;
  return moreLength;
}

export default function MembersProfile() {
  const device = useDevice();
  const { dashboardid } = useRoot();
  const { dashBoardMembers } = useDashboardMembers(dashboardid);

  const profileCount = getMemberLengthByDevice(device);
  const profileMore = getMemberMoreLength(
    dashBoardMembers?.members,
    profileCount
  );

  return (
    <Avatar.Group
      className={cn(
        'h-[38px] pl-0',
        dashBoardMembers.members.length > 0 && 'pl-8 md:pl-10'
      )}
    >
      {dashBoardMembers.members &&
        dashBoardMembers.members.slice(0, profileCount).map(member => (
          <Avatar key={member.id}>
            <Image
              width={38}
              height={38}
              src={member.profileImageUrl ?? '/images/small_logo.png'}
              alt="member profile"
            />
          </Avatar>
        ))}
      {profileMore !== 0 && <Avatar>+{profileMore}</Avatar>}
    </Avatar.Group>
  );
}

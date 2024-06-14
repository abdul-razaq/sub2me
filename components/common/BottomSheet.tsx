import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React from 'react';

import Colors from '@/theme/colors';

interface AppBottomSheetProps {
  children: React.ReactNode;
  snapPoints?: string[];
}

export default React.forwardRef<BottomSheetModal, AppBottomSheetProps>(
  ({ children, snapPoints = ['25%', '50%', '75%', '100%'] }, ref) => {
    const _snapPoints = React.useMemo(() => snapPoints, []);

    const RenderBackdrop = React.useCallback(
      (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={_snapPoints}
        index={0}
        enablePanDownToClose
        backdropComponent={RenderBackdrop}
        handleIndicatorStyle={{
          display: 'none',
        }}
        backgroundStyle={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}>
        {children}
      </BottomSheetModal>
    );
  }
);

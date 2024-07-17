import React from 'react';
import ReactPlayer from 'react-player';

function CameraView() {
  return (
    <div>
      <ReactPlayer
        url='rtsp://admin:vaaan123@192.168.0.85:554/cam/realmonitor?channel=1&subtype=0'
        playing={true}
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  );
}

export default CameraView;

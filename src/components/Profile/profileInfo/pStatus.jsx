import React, { useEffect, useState } from 'react';

const ProfileStatus = ({ status, updateStatusThunk }) => {
  const [editMode, setEditMode] = useState(false);
  const [editStatus, setEditStatus] = useState(status);

  useEffect(() => {
    setEditStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    updateStatusThunk(editStatus);
    setEditMode(false);
  };

  const onStatusChange = (e) => {
    setEditStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={editStatus}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}> {status} </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;

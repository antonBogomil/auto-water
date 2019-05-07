import React from 'react';
const NoAccess = () => {
    return (
        <div className='wrapper error-message'>
            No Access!
        </div>
    );
};
export default function RouteAccessCheck(Component, role,user) {
    if (role === 'ADMIN_ONLY' && user && user.isAdmin) {
        return Component
    } else if (role === 'AUTH_ONLY' && user) {
        return Component
    } else if (role === 'USER_ONLY' && user && user.isAdmin === false) {
        return Component
    } else if (role === 'VISITOR_ONLY' && user === undefined) {
        return Component
    } else {
        return NoAccess
    }
}

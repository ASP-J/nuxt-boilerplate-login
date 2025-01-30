import { useAuth } from "@/store/auth/authStore.js";

export const hasPermission = (permission) => {
  const auth = useAuth();
  const userPermissions = auth.userPermissions || [];
  if (permission && typeof permission === "string") {
    permission = [permission];
  }
  return !(
    Array.isArray(permission) &&
    permission.length &&
    !permission.some((p) => userPermissions?.includes(p))
  );
};

export const hasRole = (role) => {
  const auth = useAuth();
  const userRoles = auth.userRoles || [];
  if (role && typeof role === "string") {
    role = [role];
  }
  return !(
    Array.isArray(role) &&
    role.length &&
    !role.some((r) => userRoles?.includes(r))
  );
};

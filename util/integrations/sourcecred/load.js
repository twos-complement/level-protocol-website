import { mergeMembersData } from '../../api/member'

export const load = async (membersDataHashes, data) =>
  mergeMembersData('sourcecred', membersDataHashes, data)

import { prismaClient } from '../context'

export const claimVoteTokens = async (discordId: string, amount: number) => {
  const votingUsers = await prismaClient.user.findMany({
    where: {
      discordId,
    },
  })

  if (votingUsers.length > 0) {
    const votingUser = votingUsers?.[0]

    const oldAdTokenAmount = votingUser.adTokens

    await prismaClient.user.update({
      where: {
        id: votingUser.id,
      },
      data: {
        adTokens: {
          set: oldAdTokenAmount + amount,
        },
      },
    })
  }
}

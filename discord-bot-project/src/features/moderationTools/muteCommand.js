const muteCommand = (message, args) => {
  // Check if the user has the necessary permissions to use the mute command
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("You do not have permission to use this command.");
  }

  // Check if a user to mute is mentioned
  const target = message.mentions.users.first();
  if (!target) {
    return message.reply("Please mention the user you want to mute.");
  }

  // Get the member object of the mentioned user
  const targetMember = message.guild.members.cache.get(target.id);

  // Check if the target user is a member of the server
  if (!targetMember) {
    return message.reply("User not found in this server.");
  }

  // Check if the target user is already muted
  if (targetMember.roles.cache.some((role) => role.name === "Muted")) {
    return message.reply("User is already muted.");
  }

  // Mute the target user by adding the Muted role
  const mutedRole = message.guild.roles.cache.find((role) => role.name === "Muted");
  if (!mutedRole) {
    return message.reply("Muted role not found. Please create a role named 'Muted'.");
  }

  targetMember.roles.add(mutedRole);
  message.reply(`Successfully muted ${target.tag}.`);
};

module.exports = muteCommand;
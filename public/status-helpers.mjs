const INSTALL_COMMAND_STATUSES = new Set(['source-checked', 'unverified', 'unavailable']);
const CODEX_TEST_STATUSES = new Set(['verified', 'not-tested']);

export function installCommandStatus(item) {
  if (!item?.installCommand) return 'unavailable';
  return INSTALL_COMMAND_STATUSES.has(item.installCommandStatus)
    ? item.installCommandStatus
    : 'unverified';
}

export function codexTestStatus(item) {
  return CODEX_TEST_STATUSES.has(item?.codexTestStatus) ? item.codexTestStatus : 'not-tested';
}

export function installCommandStatusText(item) {
  const status = installCommandStatus(item);
  if (status === 'source-checked') return '命令来源：已核对来源页面，但尚未执行安装验证。';
  if (status === 'unverified') return '命令来源：尚未单独核对，请先查看原作者说明。';
  return '安装命令：暂无已收录的命令。';
}

export function codexStatusText(item) {
  if (codexTestStatus(item) === 'verified') return 'Codex 兼容性：已在 Codex 实测；请同时查看测试证据和环境说明。';
  const sourceStatus = item?.compatibility?.codex;
  if (sourceStatus === 'confirmed-by-source') return 'Codex 兼容性：来源列出 Codex 支持，但尚未在本项目实测。';
  if (sourceStatus === 'installable-unverified') return 'Codex 兼容性：可能可以安装，但尚未在 Codex 实测。';
  if (sourceStatus === 'adaptation-required') return 'Codex 兼容性：可能需要适配，尚未在 Codex 实测。';
  return 'Codex 兼容性：尚未在 Codex 实测。';
}

export function withEvidenceStatuses(item) {
  const commandStatus = installCommandStatus(item);
  return {
    ...item,
    installCommandStatus: commandStatus,
    codexTestStatus: codexTestStatus(item),
    installNote: commandStatus === 'unverified'
      ? '命令文本已收录，但来源尚未单独核对；可复制不代表安装成功或功能可用。'
      : item.installNote
  };
}

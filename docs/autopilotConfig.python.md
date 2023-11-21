# `consul_autopilot_config`

Refer to the Terraform Registory for docs: [`consul_autopilot_config`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config).

# `autopilotConfig` Submodule <a name="`autopilotConfig` Submodule" id="@cdktf/provider-consul.autopilotConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutopilotConfig <a name="AutopilotConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config consul_autopilot_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import autopilot_config

autopilotConfig.AutopilotConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cleanup_dead_servers: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  disable_upgrade_migration: typing.Union[bool, IResolvable] = None,
  id: str = None,
  last_contact_threshold: str = None,
  max_trailing_logs: typing.Union[int, float] = None,
  redundancy_zone_tag: str = None,
  server_stabilization_time: str = None,
  upgrade_version_tag: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.cleanupDeadServers">cleanup_dead_servers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.disableUpgradeMigration">disable_upgrade_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lastContactThreshold">last_contact_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.maxTrailingLogs">max_trailing_logs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.redundancyZoneTag">redundancy_zone_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.serverStabilizationTime">server_stabilization_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.upgradeVersionTag">upgrade_version_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cleanup_dead_servers`<sup>Optional</sup> <a name="cleanup_dead_servers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.cleanupDeadServers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.datacenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `disable_upgrade_migration`<sup>Optional</sup> <a name="disable_upgrade_migration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.disableUpgradeMigration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_contact_threshold`<sup>Optional</sup> <a name="last_contact_threshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.lastContactThreshold"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `max_trailing_logs`<sup>Optional</sup> <a name="max_trailing_logs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.maxTrailingLogs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `redundancy_zone_tag`<sup>Optional</sup> <a name="redundancy_zone_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.redundancyZoneTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `server_stabilization_time`<sup>Optional</sup> <a name="server_stabilization_time" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.serverStabilizationTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `upgrade_version_tag`<sup>Optional</sup> <a name="upgrade_version_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.upgradeVersionTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers">reset_cleanup_dead_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration">reset_disable_upgrade_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold">reset_last_contact_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs">reset_max_trailing_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag">reset_redundancy_zone_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime">reset_server_stabilization_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag">reset_upgrade_version_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_cleanup_dead_servers` <a name="reset_cleanup_dead_servers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers"></a>

```python
def reset_cleanup_dead_servers() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_disable_upgrade_migration` <a name="reset_disable_upgrade_migration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration"></a>

```python
def reset_disable_upgrade_migration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_contact_threshold` <a name="reset_last_contact_threshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold"></a>

```python
def reset_last_contact_threshold() -> None
```

##### `reset_max_trailing_logs` <a name="reset_max_trailing_logs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs"></a>

```python
def reset_max_trailing_logs() -> None
```

##### `reset_redundancy_zone_tag` <a name="reset_redundancy_zone_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag"></a>

```python
def reset_redundancy_zone_tag() -> None
```

##### `reset_server_stabilization_time` <a name="reset_server_stabilization_time" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime"></a>

```python
def reset_server_stabilization_time() -> None
```

##### `reset_upgrade_version_tag` <a name="reset_upgrade_version_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag"></a>

```python
def reset_upgrade_version_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import autopilot_config

autopilotConfig.AutopilotConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import autopilot_config

autopilotConfig.AutopilotConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import autopilot_config

autopilotConfig.AutopilotConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import autopilot_config

autopilotConfig.AutopilotConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutopilotConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutopilotConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutopilotConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput">cleanup_dead_servers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput">disable_upgrade_migration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput">last_contact_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput">max_trailing_logs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput">redundancy_zone_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput">server_stabilization_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput">upgrade_version_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers">cleanup_dead_servers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration">disable_upgrade_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold">last_contact_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs">max_trailing_logs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag">redundancy_zone_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime">server_stabilization_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag">upgrade_version_tag</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cleanup_dead_servers_input`<sup>Optional</sup> <a name="cleanup_dead_servers_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput"></a>

```python
cleanup_dead_servers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `disable_upgrade_migration_input`<sup>Optional</sup> <a name="disable_upgrade_migration_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput"></a>

```python
disable_upgrade_migration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_contact_threshold_input`<sup>Optional</sup> <a name="last_contact_threshold_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput"></a>

```python
last_contact_threshold_input: str
```

- *Type:* str

---

##### `max_trailing_logs_input`<sup>Optional</sup> <a name="max_trailing_logs_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput"></a>

```python
max_trailing_logs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redundancy_zone_tag_input`<sup>Optional</sup> <a name="redundancy_zone_tag_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput"></a>

```python
redundancy_zone_tag_input: str
```

- *Type:* str

---

##### `server_stabilization_time_input`<sup>Optional</sup> <a name="server_stabilization_time_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput"></a>

```python
server_stabilization_time_input: str
```

- *Type:* str

---

##### `upgrade_version_tag_input`<sup>Optional</sup> <a name="upgrade_version_tag_input" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput"></a>

```python
upgrade_version_tag_input: str
```

- *Type:* str

---

##### `cleanup_dead_servers`<sup>Required</sup> <a name="cleanup_dead_servers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers"></a>

```python
cleanup_dead_servers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `disable_upgrade_migration`<sup>Required</sup> <a name="disable_upgrade_migration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration"></a>

```python
disable_upgrade_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_contact_threshold`<sup>Required</sup> <a name="last_contact_threshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold"></a>

```python
last_contact_threshold: str
```

- *Type:* str

---

##### `max_trailing_logs`<sup>Required</sup> <a name="max_trailing_logs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs"></a>

```python
max_trailing_logs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redundancy_zone_tag`<sup>Required</sup> <a name="redundancy_zone_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag"></a>

```python
redundancy_zone_tag: str
```

- *Type:* str

---

##### `server_stabilization_time`<sup>Required</sup> <a name="server_stabilization_time" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime"></a>

```python
server_stabilization_time: str
```

- *Type:* str

---

##### `upgrade_version_tag`<sup>Required</sup> <a name="upgrade_version_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag"></a>

```python
upgrade_version_tag: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutopilotConfigConfig <a name="AutopilotConfigConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import autopilot_config

autopilotConfig.AutopilotConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cleanup_dead_servers: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  disable_upgrade_migration: typing.Union[bool, IResolvable] = None,
  id: str = None,
  last_contact_threshold: str = None,
  max_trailing_logs: typing.Union[int, float] = None,
  redundancy_zone_tag: str = None,
  server_stabilization_time: str = None,
  upgrade_version_tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers">cleanup_dead_servers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration">disable_upgrade_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold">last_contact_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs">max_trailing_logs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag">redundancy_zone_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime">server_stabilization_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag">upgrade_version_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cleanup_dead_servers`<sup>Optional</sup> <a name="cleanup_dead_servers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers"></a>

```python
cleanup_dead_servers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `disable_upgrade_migration`<sup>Optional</sup> <a name="disable_upgrade_migration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration"></a>

```python
disable_upgrade_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_contact_threshold`<sup>Optional</sup> <a name="last_contact_threshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold"></a>

```python
last_contact_threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `max_trailing_logs`<sup>Optional</sup> <a name="max_trailing_logs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs"></a>

```python
max_trailing_logs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `redundancy_zone_tag`<sup>Optional</sup> <a name="redundancy_zone_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag"></a>

```python
redundancy_zone_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `server_stabilization_time`<sup>Optional</sup> <a name="server_stabilization_time" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime"></a>

```python
server_stabilization_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `upgrade_version_tag`<sup>Optional</sup> <a name="upgrade_version_tag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag"></a>

```python
upgrade_version_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---




# `dataConsulConfigEntryV2ExportedServices` Submodule <a name="`dataConsulConfigEntryV2ExportedServices` Submodule" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulConfigEntryV2ExportedServices <a name="DataConsulConfigEntryV2ExportedServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services consul_config_entry_v2_exported_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_config_entry_v2_exported_services

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kind: str,
  name: str,
  id: str = None,
  namespace: str = None,
  partition: str = None,
  partition_consumers: typing.List[str] = None,
  peer_consumers: typing.List[str] = None,
  sameness_group_consumers: typing.List[str] = None,
  services: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partition">partition</a></code> | <code>str</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partitionConsumers">partition_consumers</a></code> | <code>typing.List[str]</code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.peerConsumers">peer_consumers</a></code> | <code>typing.List[str]</code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.samenessGroupConsumers">sameness_group_consumers</a></code> | <code>typing.List[str]</code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.services">services</a></code> | <code>typing.List[str]</code> | The exported services. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.kind"></a>

- *Type:* str

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#kind DataConsulConfigEntryV2ExportedServices#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.name"></a>

- *Type:* str

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#name DataConsulConfigEntryV2ExportedServices#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#namespace DataConsulConfigEntryV2ExportedServices#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partition"></a>

- *Type:* str

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#partition DataConsulConfigEntryV2ExportedServices#partition}

---

##### `partition_consumers`<sup>Optional</sup> <a name="partition_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partitionConsumers"></a>

- *Type:* typing.List[str]

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#partition_consumers DataConsulConfigEntryV2ExportedServices#partition_consumers}

---

##### `peer_consumers`<sup>Optional</sup> <a name="peer_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.peerConsumers"></a>

- *Type:* typing.List[str]

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#peer_consumers DataConsulConfigEntryV2ExportedServices#peer_consumers}

---

##### `sameness_group_consumers`<sup>Optional</sup> <a name="sameness_group_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.samenessGroupConsumers"></a>

- *Type:* typing.List[str]

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#sameness_group_consumers DataConsulConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.services"></a>

- *Type:* typing.List[str]

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#services DataConsulConfigEntryV2ExportedServices#services}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers">reset_partition_consumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers">reset_peer_consumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers">reset_sameness_group_consumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices">reset_services</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_partition_consumers` <a name="reset_partition_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers"></a>

```python
def reset_partition_consumers() -> None
```

##### `reset_peer_consumers` <a name="reset_peer_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers"></a>

```python
def reset_peer_consumers() -> None
```

##### `reset_sameness_group_consumers` <a name="reset_sameness_group_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers"></a>

```python
def reset_sameness_group_consumers() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices"></a>

```python
def reset_services() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_config_entry_v2_exported_services

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_config_entry_v2_exported_services

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_config_entry_v2_exported_services

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_config_entry_v2_exported_services

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataConsulConfigEntryV2ExportedServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataConsulConfigEntryV2ExportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulConfigEntryV2ExportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput">partition_consumers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput">peer_consumers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput">sameness_group_consumers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers">partition_consumers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers">peer_consumers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers">sameness_group_consumers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_consumers_input`<sup>Optional</sup> <a name="partition_consumers_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput"></a>

```python
partition_consumers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `peer_consumers_input`<sup>Optional</sup> <a name="peer_consumers_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput"></a>

```python
peer_consumers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sameness_group_consumers_input`<sup>Optional</sup> <a name="sameness_group_consumers_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput"></a>

```python
sameness_group_consumers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `partition_consumers`<sup>Required</sup> <a name="partition_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers"></a>

```python
partition_consumers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_consumers`<sup>Required</sup> <a name="peer_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers"></a>

```python
peer_consumers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sameness_group_consumers`<sup>Required</sup> <a name="sameness_group_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers"></a>

```python
sameness_group_consumers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulConfigEntryV2ExportedServicesConfig <a name="DataConsulConfigEntryV2ExportedServicesConfig" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_config_entry_v2_exported_services

dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kind: str,
  name: str,
  id: str = None,
  namespace: str = None,
  partition: str = None,
  partition_consumers: typing.List[str] = None,
  peer_consumers: typing.List[str] = None,
  sameness_group_consumers: typing.List[str] = None,
  services: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind">kind</a></code> | <code>str</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name">name</a></code> | <code>str</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition">partition</a></code> | <code>str</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers">partition_consumers</a></code> | <code>typing.List[str]</code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers">peer_consumers</a></code> | <code>typing.List[str]</code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers">sameness_group_consumers</a></code> | <code>typing.List[str]</code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services">services</a></code> | <code>typing.List[str]</code> | The exported services. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#kind DataConsulConfigEntryV2ExportedServices#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#name DataConsulConfigEntryV2ExportedServices#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#namespace DataConsulConfigEntryV2ExportedServices#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#partition DataConsulConfigEntryV2ExportedServices#partition}

---

##### `partition_consumers`<sup>Optional</sup> <a name="partition_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers"></a>

```python
partition_consumers: typing.List[str]
```

- *Type:* typing.List[str]

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#partition_consumers DataConsulConfigEntryV2ExportedServices#partition_consumers}

---

##### `peer_consumers`<sup>Optional</sup> <a name="peer_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers"></a>

```python
peer_consumers: typing.List[str]
```

- *Type:* typing.List[str]

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#peer_consumers DataConsulConfigEntryV2ExportedServices#peer_consumers}

---

##### `sameness_group_consumers`<sup>Optional</sup> <a name="sameness_group_consumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers"></a>

```python
sameness_group_consumers: typing.List[str]
```

- *Type:* typing.List[str]

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#sameness_group_consumers DataConsulConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/config_entry_v2_exported_services#services DataConsulConfigEntryV2ExportedServices#services}

---




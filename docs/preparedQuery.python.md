# `preparedQuery` Submodule <a name="`preparedQuery` Submodule" id="@cdktf/provider-consul.preparedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreparedQuery <a name="PreparedQuery" id="@cdktf/provider-consul.preparedQuery.PreparedQuery"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/r/prepared_query consul_prepared_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQuery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  service: str,
  connect: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  dns: PreparedQueryDns = None,
  failover: PreparedQueryFailover = None,
  id: str = None,
  ignore_check_ids: typing.List[str] = None,
  near: str = None,
  node_meta: typing.Mapping[str] = None,
  only_passing: typing.Union[bool, IResolvable] = None,
  service_meta: typing.Mapping[str] = None,
  session: str = None,
  stored_token: str = None,
  tags: typing.List[str] = None,
  template: PreparedQueryTemplate = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connect">connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.ignoreCheckIds">ignore_check_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.near">near</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.onlyPassing">only_passing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.serviceMeta">service_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.session">session</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.storedToken">stored_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}.

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.datacenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

dns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#dns PreparedQuery#dns}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.failover"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#failover PreparedQuery#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_check_ids`<sup>Optional</sup> <a name="ignore_check_ids" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.ignoreCheckIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.near"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}.

---

##### `node_meta`<sup>Optional</sup> <a name="node_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.nodeMeta"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}.

---

##### `only_passing`<sup>Optional</sup> <a name="only_passing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.onlyPassing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}.

---

##### `service_meta`<sup>Optional</sup> <a name="service_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.serviceMeta"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}.

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.session"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}.

---

##### `stored_token`<sup>Optional</sup> <a name="stored_token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.storedToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#template PreparedQuery#template}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns">put_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover">put_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect">reset_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover">reset_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds">reset_ignore_check_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear">reset_near</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta">reset_node_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing">reset_only_passing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta">reset_service_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession">reset_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken">reset_stored_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate">reset_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dns` <a name="put_dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns"></a>

```python
def put_dns(
  ttl: str = None
) -> None
```

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns.parameter.ttl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ttl PreparedQuery#ttl}.

---

##### `put_failover` <a name="put_failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover"></a>

```python
def put_failover(
  datacenters: typing.List[str] = None,
  nearest_n: typing.Union[int, float] = None
) -> None
```

###### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover.parameter.datacenters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenters PreparedQuery#datacenters}.

---

###### `nearest_n`<sup>Optional</sup> <a name="nearest_n" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover.parameter.nearestN"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#nearest_n PreparedQuery#nearest_n}.

---

##### `put_template` <a name="put_template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate"></a>

```python
def put_template(
  regexp: str,
  type: str
) -> None
```

###### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate.parameter.regexp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#regexp PreparedQuery#regexp}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#type PreparedQuery#type}.

---

##### `reset_connect` <a name="reset_connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect"></a>

```python
def reset_connect() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_dns` <a name="reset_dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_failover` <a name="reset_failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover"></a>

```python
def reset_failover() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_check_ids` <a name="reset_ignore_check_ids" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds"></a>

```python
def reset_ignore_check_ids() -> None
```

##### `reset_near` <a name="reset_near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear"></a>

```python
def reset_near() -> None
```

##### `reset_node_meta` <a name="reset_node_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta"></a>

```python
def reset_node_meta() -> None
```

##### `reset_only_passing` <a name="reset_only_passing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing"></a>

```python
def reset_only_passing() -> None
```

##### `reset_service_meta` <a name="reset_service_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta"></a>

```python
def reset_service_meta() -> None
```

##### `reset_session` <a name="reset_session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession"></a>

```python
def reset_session() -> None
```

##### `reset_stored_token` <a name="reset_stored_token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken"></a>

```python
def reset_stored_token() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template` <a name="reset_template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate"></a>

```python
def reset_template() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput">connect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput">dns_input</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput">failover_input</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput">ignore_check_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput">near_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput">node_meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput">only_passing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput">service_meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput">session_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput">stored_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect">connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds">ignore_check_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near">near</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing">only_passing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta">service_meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session">session</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken">stored_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns"></a>

```python
dns: PreparedQueryDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a>

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover"></a>

```python
failover: PreparedQueryFailoverOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template"></a>

```python
template: PreparedQueryTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a>

---

##### `connect_input`<sup>Optional</sup> <a name="connect_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput"></a>

```python
connect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput"></a>

```python
dns_input: PreparedQueryDns
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `failover_input`<sup>Optional</sup> <a name="failover_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput"></a>

```python
failover_input: PreparedQueryFailover
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_check_ids_input`<sup>Optional</sup> <a name="ignore_check_ids_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput"></a>

```python
ignore_check_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `near_input`<sup>Optional</sup> <a name="near_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput"></a>

```python
near_input: str
```

- *Type:* str

---

##### `node_meta_input`<sup>Optional</sup> <a name="node_meta_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput"></a>

```python
node_meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `only_passing_input`<sup>Optional</sup> <a name="only_passing_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput"></a>

```python
only_passing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_meta_input`<sup>Optional</sup> <a name="service_meta_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput"></a>

```python
service_meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `session_input`<sup>Optional</sup> <a name="session_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput"></a>

```python
session_input: str
```

- *Type:* str

---

##### `stored_token_input`<sup>Optional</sup> <a name="stored_token_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput"></a>

```python
stored_token_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput"></a>

```python
template_input: PreparedQueryTemplate
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect"></a>

```python
connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_check_ids`<sup>Required</sup> <a name="ignore_check_ids" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds"></a>

```python
ignore_check_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near"></a>

```python
near: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `only_passing`<sup>Required</sup> <a name="only_passing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing"></a>

```python
only_passing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_meta`<sup>Required</sup> <a name="service_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta"></a>

```python
service_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `session`<sup>Required</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session"></a>

```python
session: str
```

- *Type:* str

---

##### `stored_token`<sup>Required</sup> <a name="stored_token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken"></a>

```python
stored_token: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PreparedQueryConfig <a name="PreparedQueryConfig" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  service: str,
  connect: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  dns: PreparedQueryDns = None,
  failover: PreparedQueryFailover = None,
  id: str = None,
  ignore_check_ids: typing.List[str] = None,
  near: str = None,
  node_meta: typing.Mapping[str] = None,
  only_passing: typing.Union[bool, IResolvable] = None,
  service_meta: typing.Mapping[str] = None,
  session: str = None,
  stored_token: str = None,
  tags: typing.List[str] = None,
  template: PreparedQueryTemplate = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect">connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds">ignore_check_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near">near</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing">only_passing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta">service_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session">session</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken">stored_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}.

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect"></a>

```python
connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns"></a>

```python
dns: PreparedQueryDns
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

dns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#dns PreparedQuery#dns}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover"></a>

```python
failover: PreparedQueryFailover
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#failover PreparedQuery#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_check_ids`<sup>Optional</sup> <a name="ignore_check_ids" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds"></a>

```python
ignore_check_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near"></a>

```python
near: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}.

---

##### `node_meta`<sup>Optional</sup> <a name="node_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}.

---

##### `only_passing`<sup>Optional</sup> <a name="only_passing" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing"></a>

```python
only_passing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}.

---

##### `service_meta`<sup>Optional</sup> <a name="service_meta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta"></a>

```python
service_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}.

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session"></a>

```python
session: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}.

---

##### `stored_token`<sup>Optional</sup> <a name="stored_token" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken"></a>

```python
stored_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template"></a>

```python
template: PreparedQueryTemplate
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#template PreparedQuery#template}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}.

---

### PreparedQueryDns <a name="PreparedQueryDns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryDns(
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl">ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ttl PreparedQuery#ttl}. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ttl PreparedQuery#ttl}.

---

### PreparedQueryFailover <a name="PreparedQueryFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryFailover(
  datacenters: typing.List[str] = None,
  nearest_n: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenters PreparedQuery#datacenters}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN">nearest_n</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#nearest_n PreparedQuery#nearest_n}. |

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenters PreparedQuery#datacenters}.

---

##### `nearest_n`<sup>Optional</sup> <a name="nearest_n" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN"></a>

```python
nearest_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#nearest_n PreparedQuery#nearest_n}.

---

### PreparedQueryTemplate <a name="PreparedQueryTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryTemplate(
  regexp: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp">regexp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#regexp PreparedQuery#regexp}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#type PreparedQuery#type}. |

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp"></a>

```python
regexp: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#regexp PreparedQuery#regexp}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#type PreparedQuery#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### PreparedQueryDnsOutputReference <a name="PreparedQueryDnsOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue"></a>

```python
internal_value: PreparedQueryDns
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---


### PreparedQueryFailoverOutputReference <a name="PreparedQueryFailoverOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters">reset_datacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN">reset_nearest_n</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datacenters` <a name="reset_datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters"></a>

```python
def reset_datacenters() -> None
```

##### `reset_nearest_n` <a name="reset_nearest_n" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN"></a>

```python
def reset_nearest_n() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput">datacenters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput">nearest_n_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN">nearest_n</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenters_input`<sup>Optional</sup> <a name="datacenters_input" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput"></a>

```python
datacenters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nearest_n_input`<sup>Optional</sup> <a name="nearest_n_input" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput"></a>

```python
nearest_n_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nearest_n`<sup>Required</sup> <a name="nearest_n" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN"></a>

```python
nearest_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue"></a>

```python
internal_value: PreparedQueryFailover
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---


### PreparedQueryTemplateOutputReference <a name="PreparedQueryTemplateOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import prepared_query

preparedQuery.PreparedQueryTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput">regexp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp">regexp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regexp_input`<sup>Optional</sup> <a name="regexp_input" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput"></a>

```python
regexp_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp"></a>

```python
regexp: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue"></a>

```python
internal_value: PreparedQueryTemplate
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---




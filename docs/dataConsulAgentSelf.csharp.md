# `data_consul_agent_self`

Refer to the Terraform Registory for docs: [`data_consul_agent_self`](https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/agent_self).

# `dataConsulAgentSelf` Submodule <a name="`dataConsulAgentSelf` Submodule" id="@cdktf/provider-consul.dataConsulAgentSelf"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAgentSelf <a name="DataConsulAgentSelf" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/agent_self consul_agent_self}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAgentSelf(Construct Scope, string Id, DataConsulAgentSelfConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig">DataConsulAgentSelfConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig">DataConsulAgentSelfConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAgentSelf.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAgentSelf.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAgentSelf.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter">AclDatacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy">AclDefaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl">AclDisabledTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy">AclDownPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics">AclEnforce08Semantics</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl">AclTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses">Addresses</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr">AdvertiseAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs">AdvertiseAddrs</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan">AdvertiseAddrWan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin">AtlasJoin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr">BindAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect">BootstrapExpect</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode">BootstrapMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin">CheckDeregisterIntervalMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval">CheckReapInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval">CheckUpdateInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr">ClientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir">DataDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode">DevMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns">Dns</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors">DnsRecursors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature">EnableAnonymousSignature</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates">EnableCoordinates</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug">EnableDebug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec">EnableRemoteExec</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog">EnableSyslog</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi">EnableUi</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck">EnableUpdateCheck</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt">LeaveOnInt</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm">LeaveOnTerm</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance">Performance</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile">PidFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports">Ports</a></code> | <code>HashiCorp.Cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion">ProtocolVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan">ReconnectTimeoutLan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan">ReconnectTimeoutWan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave">RejoinAfterLeave</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin">RetryJoin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2">RetryJoinEc2</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce">RetryJoinGce</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan">RetryJoinWan</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts">RetryMaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan">RetryMaxAttemptsWan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr">SerfLanBindAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr">SerfWanBindAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode">ServerMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin">SessionTtlMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin">StartJoin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan">StartJoinWan</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility">SyslogFacility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses">TaggedAddresses</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry">Telemetry</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile">TlsCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile">TlsCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile">TlsKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming">TlsVerifyIncoming</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing">TlsVerifyOutgoing</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname">TlsVerifyServerHostname</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs">TranslateWanAddrs</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir">UiDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets">UnixSockets</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease">VersionPrerelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision">VersionRevision</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AclDatacenter`<sup>Required</sup> <a name="AclDatacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter"></a>

```csharp
public string AclDatacenter { get; }
```

- *Type:* string

---

##### `AclDefaultPolicy`<sup>Required</sup> <a name="AclDefaultPolicy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy"></a>

```csharp
public string AclDefaultPolicy { get; }
```

- *Type:* string

---

##### `AclDisabledTtl`<sup>Required</sup> <a name="AclDisabledTtl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl"></a>

```csharp
public string AclDisabledTtl { get; }
```

- *Type:* string

---

##### `AclDownPolicy`<sup>Required</sup> <a name="AclDownPolicy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy"></a>

```csharp
public string AclDownPolicy { get; }
```

- *Type:* string

---

##### `AclEnforce08Semantics`<sup>Required</sup> <a name="AclEnforce08Semantics" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics"></a>

```csharp
public IResolvable AclEnforce08Semantics { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AclTtl`<sup>Required</sup> <a name="AclTtl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl"></a>

```csharp
public string AclTtl { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses"></a>

```csharp
public StringMap Addresses { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AdvertiseAddr`<sup>Required</sup> <a name="AdvertiseAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr"></a>

```csharp
public string AdvertiseAddr { get; }
```

- *Type:* string

---

##### `AdvertiseAddrs`<sup>Required</sup> <a name="AdvertiseAddrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs"></a>

```csharp
public StringMap AdvertiseAddrs { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AdvertiseAddrWan`<sup>Required</sup> <a name="AdvertiseAddrWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan"></a>

```csharp
public string AdvertiseAddrWan { get; }
```

- *Type:* string

---

##### `AtlasJoin`<sup>Required</sup> <a name="AtlasJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin"></a>

```csharp
public IResolvable AtlasJoin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BindAddr`<sup>Required</sup> <a name="BindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr"></a>

```csharp
public string BindAddr { get; }
```

- *Type:* string

---

##### `BootstrapExpect`<sup>Required</sup> <a name="BootstrapExpect" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect"></a>

```csharp
public double BootstrapExpect { get; }
```

- *Type:* double

---

##### `BootstrapMode`<sup>Required</sup> <a name="BootstrapMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode"></a>

```csharp
public IResolvable BootstrapMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CheckDeregisterIntervalMin`<sup>Required</sup> <a name="CheckDeregisterIntervalMin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin"></a>

```csharp
public string CheckDeregisterIntervalMin { get; }
```

- *Type:* string

---

##### `CheckReapInterval`<sup>Required</sup> <a name="CheckReapInterval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval"></a>

```csharp
public string CheckReapInterval { get; }
```

- *Type:* string

---

##### `CheckUpdateInterval`<sup>Required</sup> <a name="CheckUpdateInterval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval"></a>

```csharp
public string CheckUpdateInterval { get; }
```

- *Type:* string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr"></a>

```csharp
public string ClientAddr { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `DataDir`<sup>Required</sup> <a name="DataDir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir"></a>

```csharp
public string DataDir { get; }
```

- *Type:* string

---

##### `DevMode`<sup>Required</sup> <a name="DevMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode"></a>

```csharp
public IResolvable DevMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns"></a>

```csharp
public StringMap Dns { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DnsRecursors`<sup>Required</sup> <a name="DnsRecursors" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors"></a>

```csharp
public string[] DnsRecursors { get; }
```

- *Type:* string[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EnableAnonymousSignature`<sup>Required</sup> <a name="EnableAnonymousSignature" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature"></a>

```csharp
public IResolvable EnableAnonymousSignature { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableCoordinates`<sup>Required</sup> <a name="EnableCoordinates" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates"></a>

```csharp
public IResolvable EnableCoordinates { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableDebug`<sup>Required</sup> <a name="EnableDebug" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug"></a>

```csharp
public IResolvable EnableDebug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableRemoteExec`<sup>Required</sup> <a name="EnableRemoteExec" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec"></a>

```csharp
public IResolvable EnableRemoteExec { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableSyslog`<sup>Required</sup> <a name="EnableSyslog" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog"></a>

```csharp
public IResolvable EnableSyslog { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableUi`<sup>Required</sup> <a name="EnableUi" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi"></a>

```csharp
public IResolvable EnableUi { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableUpdateCheck`<sup>Required</sup> <a name="EnableUpdateCheck" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck"></a>

```csharp
public IResolvable EnableUpdateCheck { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LeaveOnInt`<sup>Required</sup> <a name="LeaveOnInt" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt"></a>

```csharp
public IResolvable LeaveOnInt { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeaveOnTerm`<sup>Required</sup> <a name="LeaveOnTerm" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm"></a>

```csharp
public IResolvable LeaveOnTerm { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Performance`<sup>Required</sup> <a name="Performance" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance"></a>

```csharp
public StringMap Performance { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PidFile`<sup>Required</sup> <a name="PidFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile"></a>

```csharp
public string PidFile { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports"></a>

```csharp
public NumberMap Ports { get; }
```

- *Type:* HashiCorp.Cdktf.NumberMap

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion"></a>

```csharp
public double ProtocolVersion { get; }
```

- *Type:* double

---

##### `ReconnectTimeoutLan`<sup>Required</sup> <a name="ReconnectTimeoutLan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan"></a>

```csharp
public string ReconnectTimeoutLan { get; }
```

- *Type:* string

---

##### `ReconnectTimeoutWan`<sup>Required</sup> <a name="ReconnectTimeoutWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan"></a>

```csharp
public string ReconnectTimeoutWan { get; }
```

- *Type:* string

---

##### `RejoinAfterLeave`<sup>Required</sup> <a name="RejoinAfterLeave" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave"></a>

```csharp
public IResolvable RejoinAfterLeave { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RetryJoin`<sup>Required</sup> <a name="RetryJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin"></a>

```csharp
public string[] RetryJoin { get; }
```

- *Type:* string[]

---

##### `RetryJoinEc2`<sup>Required</sup> <a name="RetryJoinEc2" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2"></a>

```csharp
public StringMap RetryJoinEc2 { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `RetryJoinGce`<sup>Required</sup> <a name="RetryJoinGce" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce"></a>

```csharp
public StringMap RetryJoinGce { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `RetryJoinWan`<sup>Required</sup> <a name="RetryJoinWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan"></a>

```csharp
public string[] RetryJoinWan { get; }
```

- *Type:* string[]

---

##### `RetryMaxAttempts`<sup>Required</sup> <a name="RetryMaxAttempts" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts"></a>

```csharp
public double RetryMaxAttempts { get; }
```

- *Type:* double

---

##### `RetryMaxAttemptsWan`<sup>Required</sup> <a name="RetryMaxAttemptsWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan"></a>

```csharp
public double RetryMaxAttemptsWan { get; }
```

- *Type:* double

---

##### `SerfLanBindAddr`<sup>Required</sup> <a name="SerfLanBindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr"></a>

```csharp
public string SerfLanBindAddr { get; }
```

- *Type:* string

---

##### `SerfWanBindAddr`<sup>Required</sup> <a name="SerfWanBindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr"></a>

```csharp
public string SerfWanBindAddr { get; }
```

- *Type:* string

---

##### `ServerMode`<sup>Required</sup> <a name="ServerMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode"></a>

```csharp
public IResolvable ServerMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SessionTtlMin`<sup>Required</sup> <a name="SessionTtlMin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin"></a>

```csharp
public string SessionTtlMin { get; }
```

- *Type:* string

---

##### `StartJoin`<sup>Required</sup> <a name="StartJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin"></a>

```csharp
public string[] StartJoin { get; }
```

- *Type:* string[]

---

##### `StartJoinWan`<sup>Required</sup> <a name="StartJoinWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan"></a>

```csharp
public string[] StartJoinWan { get; }
```

- *Type:* string[]

---

##### `SyslogFacility`<sup>Required</sup> <a name="SyslogFacility" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility"></a>

```csharp
public string SyslogFacility { get; }
```

- *Type:* string

---

##### `TaggedAddresses`<sup>Required</sup> <a name="TaggedAddresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses"></a>

```csharp
public StringMap TaggedAddresses { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Telemetry`<sup>Required</sup> <a name="Telemetry" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry"></a>

```csharp
public StringMap Telemetry { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TlsCaFile`<sup>Required</sup> <a name="TlsCaFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile"></a>

```csharp
public string TlsCaFile { get; }
```

- *Type:* string

---

##### `TlsCertFile`<sup>Required</sup> <a name="TlsCertFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile"></a>

```csharp
public string TlsCertFile { get; }
```

- *Type:* string

---

##### `TlsKeyFile`<sup>Required</sup> <a name="TlsKeyFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile"></a>

```csharp
public string TlsKeyFile { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

##### `TlsVerifyIncoming`<sup>Required</sup> <a name="TlsVerifyIncoming" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming"></a>

```csharp
public IResolvable TlsVerifyIncoming { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TlsVerifyOutgoing`<sup>Required</sup> <a name="TlsVerifyOutgoing" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing"></a>

```csharp
public IResolvable TlsVerifyOutgoing { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TlsVerifyServerHostname`<sup>Required</sup> <a name="TlsVerifyServerHostname" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname"></a>

```csharp
public IResolvable TlsVerifyServerHostname { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TranslateWanAddrs`<sup>Required</sup> <a name="TranslateWanAddrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs"></a>

```csharp
public IResolvable TranslateWanAddrs { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UiDir`<sup>Required</sup> <a name="UiDir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir"></a>

```csharp
public string UiDir { get; }
```

- *Type:* string

---

##### `UnixSockets`<sup>Required</sup> <a name="UnixSockets" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets"></a>

```csharp
public StringMap UnixSockets { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionPrerelease`<sup>Required</sup> <a name="VersionPrerelease" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease"></a>

```csharp
public string VersionPrerelease { get; }
```

- *Type:* string

---

##### `VersionRevision`<sup>Required</sup> <a name="VersionRevision" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision"></a>

```csharp
public string VersionRevision { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAgentSelfConfig <a name="DataConsulAgentSelfConfig" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAgentSelfConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---




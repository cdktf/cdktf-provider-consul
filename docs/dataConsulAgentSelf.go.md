# `dataConsulAgentSelf` Submodule <a name="`dataConsulAgentSelf` Submodule" id="@cdktf/provider-consul.dataConsulAgentSelf"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAgentSelf <a name="DataConsulAgentSelf" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/agent_self consul_agent_self}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulagentself"

dataconsulagentself.NewDataConsulAgentSelf(scope Construct, id *string, config DataConsulAgentSelfConfig) DataConsulAgentSelf
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig">DataConsulAgentSelfConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig">DataConsulAgentSelfConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulagentself"

dataconsulagentself.DataConsulAgentSelf_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulagentself"

dataconsulagentself.DataConsulAgentSelf_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulagentself"

dataconsulagentself.DataConsulAgentSelf_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulagentself"

dataconsulagentself.DataConsulAgentSelf_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataConsulAgentSelf to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataConsulAgentSelf that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/agent_self#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAgentSelf to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter">AclDatacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy">AclDefaultPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl">AclDisabledTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy">AclDownPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics">AclEnforce08Semantics</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl">AclTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses">Addresses</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr">AdvertiseAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs">AdvertiseAddrs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan">AdvertiseAddrWan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin">AtlasJoin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr">BindAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect">BootstrapExpect</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode">BootstrapMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin">CheckDeregisterIntervalMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval">CheckReapInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval">CheckUpdateInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr">ClientAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir">DataDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode">DevMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns">Dns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors">DnsRecursors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature">EnableAnonymousSignature</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates">EnableCoordinates</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug">EnableDebug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec">EnableRemoteExec</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog">EnableSyslog</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi">EnableUi</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck">EnableUpdateCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt">LeaveOnInt</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm">LeaveOnTerm</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance">Performance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile">PidFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports">Ports</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion">ProtocolVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan">ReconnectTimeoutLan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan">ReconnectTimeoutWan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave">RejoinAfterLeave</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin">RetryJoin</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2">RetryJoinEc2</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce">RetryJoinGce</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan">RetryJoinWan</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts">RetryMaxAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan">RetryMaxAttemptsWan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr">SerfLanBindAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr">SerfWanBindAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode">ServerMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin">SessionTtlMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin">StartJoin</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan">StartJoinWan</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility">SyslogFacility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses">TaggedAddresses</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry">Telemetry</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile">TlsCaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile">TlsCertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile">TlsKeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion">TlsMinVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming">TlsVerifyIncoming</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing">TlsVerifyOutgoing</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname">TlsVerifyServerHostname</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs">TranslateWanAddrs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir">UiDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets">UnixSockets</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease">VersionPrerelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision">VersionRevision</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AclDatacenter`<sup>Required</sup> <a name="AclDatacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter"></a>

```go
func AclDatacenter() *string
```

- *Type:* *string

---

##### `AclDefaultPolicy`<sup>Required</sup> <a name="AclDefaultPolicy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy"></a>

```go
func AclDefaultPolicy() *string
```

- *Type:* *string

---

##### `AclDisabledTtl`<sup>Required</sup> <a name="AclDisabledTtl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl"></a>

```go
func AclDisabledTtl() *string
```

- *Type:* *string

---

##### `AclDownPolicy`<sup>Required</sup> <a name="AclDownPolicy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy"></a>

```go
func AclDownPolicy() *string
```

- *Type:* *string

---

##### `AclEnforce08Semantics`<sup>Required</sup> <a name="AclEnforce08Semantics" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics"></a>

```go
func AclEnforce08Semantics() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AclTtl`<sup>Required</sup> <a name="AclTtl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl"></a>

```go
func AclTtl() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses"></a>

```go
func Addresses() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AdvertiseAddr`<sup>Required</sup> <a name="AdvertiseAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr"></a>

```go
func AdvertiseAddr() *string
```

- *Type:* *string

---

##### `AdvertiseAddrs`<sup>Required</sup> <a name="AdvertiseAddrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs"></a>

```go
func AdvertiseAddrs() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AdvertiseAddrWan`<sup>Required</sup> <a name="AdvertiseAddrWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan"></a>

```go
func AdvertiseAddrWan() *string
```

- *Type:* *string

---

##### `AtlasJoin`<sup>Required</sup> <a name="AtlasJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin"></a>

```go
func AtlasJoin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BindAddr`<sup>Required</sup> <a name="BindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr"></a>

```go
func BindAddr() *string
```

- *Type:* *string

---

##### `BootstrapExpect`<sup>Required</sup> <a name="BootstrapExpect" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect"></a>

```go
func BootstrapExpect() *f64
```

- *Type:* *f64

---

##### `BootstrapMode`<sup>Required</sup> <a name="BootstrapMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode"></a>

```go
func BootstrapMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CheckDeregisterIntervalMin`<sup>Required</sup> <a name="CheckDeregisterIntervalMin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin"></a>

```go
func CheckDeregisterIntervalMin() *string
```

- *Type:* *string

---

##### `CheckReapInterval`<sup>Required</sup> <a name="CheckReapInterval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval"></a>

```go
func CheckReapInterval() *string
```

- *Type:* *string

---

##### `CheckUpdateInterval`<sup>Required</sup> <a name="CheckUpdateInterval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval"></a>

```go
func CheckUpdateInterval() *string
```

- *Type:* *string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr"></a>

```go
func ClientAddr() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `DataDir`<sup>Required</sup> <a name="DataDir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir"></a>

```go
func DataDir() *string
```

- *Type:* *string

---

##### `DevMode`<sup>Required</sup> <a name="DevMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode"></a>

```go
func DevMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns"></a>

```go
func Dns() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DnsRecursors`<sup>Required</sup> <a name="DnsRecursors" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors"></a>

```go
func DnsRecursors() *[]*string
```

- *Type:* *[]*string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EnableAnonymousSignature`<sup>Required</sup> <a name="EnableAnonymousSignature" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature"></a>

```go
func EnableAnonymousSignature() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableCoordinates`<sup>Required</sup> <a name="EnableCoordinates" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates"></a>

```go
func EnableCoordinates() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableDebug`<sup>Required</sup> <a name="EnableDebug" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug"></a>

```go
func EnableDebug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableRemoteExec`<sup>Required</sup> <a name="EnableRemoteExec" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec"></a>

```go
func EnableRemoteExec() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableSyslog`<sup>Required</sup> <a name="EnableSyslog" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog"></a>

```go
func EnableSyslog() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableUi`<sup>Required</sup> <a name="EnableUi" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi"></a>

```go
func EnableUi() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableUpdateCheck`<sup>Required</sup> <a name="EnableUpdateCheck" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck"></a>

```go
func EnableUpdateCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LeaveOnInt`<sup>Required</sup> <a name="LeaveOnInt" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt"></a>

```go
func LeaveOnInt() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LeaveOnTerm`<sup>Required</sup> <a name="LeaveOnTerm" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm"></a>

```go
func LeaveOnTerm() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Performance`<sup>Required</sup> <a name="Performance" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance"></a>

```go
func Performance() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PidFile`<sup>Required</sup> <a name="PidFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile"></a>

```go
func PidFile() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports"></a>

```go
func Ports() NumberMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.NumberMap

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion"></a>

```go
func ProtocolVersion() *f64
```

- *Type:* *f64

---

##### `ReconnectTimeoutLan`<sup>Required</sup> <a name="ReconnectTimeoutLan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan"></a>

```go
func ReconnectTimeoutLan() *string
```

- *Type:* *string

---

##### `ReconnectTimeoutWan`<sup>Required</sup> <a name="ReconnectTimeoutWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan"></a>

```go
func ReconnectTimeoutWan() *string
```

- *Type:* *string

---

##### `RejoinAfterLeave`<sup>Required</sup> <a name="RejoinAfterLeave" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave"></a>

```go
func RejoinAfterLeave() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RetryJoin`<sup>Required</sup> <a name="RetryJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin"></a>

```go
func RetryJoin() *[]*string
```

- *Type:* *[]*string

---

##### `RetryJoinEc2`<sup>Required</sup> <a name="RetryJoinEc2" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2"></a>

```go
func RetryJoinEc2() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RetryJoinGce`<sup>Required</sup> <a name="RetryJoinGce" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce"></a>

```go
func RetryJoinGce() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RetryJoinWan`<sup>Required</sup> <a name="RetryJoinWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan"></a>

```go
func RetryJoinWan() *[]*string
```

- *Type:* *[]*string

---

##### `RetryMaxAttempts`<sup>Required</sup> <a name="RetryMaxAttempts" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts"></a>

```go
func RetryMaxAttempts() *f64
```

- *Type:* *f64

---

##### `RetryMaxAttemptsWan`<sup>Required</sup> <a name="RetryMaxAttemptsWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan"></a>

```go
func RetryMaxAttemptsWan() *f64
```

- *Type:* *f64

---

##### `SerfLanBindAddr`<sup>Required</sup> <a name="SerfLanBindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr"></a>

```go
func SerfLanBindAddr() *string
```

- *Type:* *string

---

##### `SerfWanBindAddr`<sup>Required</sup> <a name="SerfWanBindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr"></a>

```go
func SerfWanBindAddr() *string
```

- *Type:* *string

---

##### `ServerMode`<sup>Required</sup> <a name="ServerMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode"></a>

```go
func ServerMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SessionTtlMin`<sup>Required</sup> <a name="SessionTtlMin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin"></a>

```go
func SessionTtlMin() *string
```

- *Type:* *string

---

##### `StartJoin`<sup>Required</sup> <a name="StartJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin"></a>

```go
func StartJoin() *[]*string
```

- *Type:* *[]*string

---

##### `StartJoinWan`<sup>Required</sup> <a name="StartJoinWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan"></a>

```go
func StartJoinWan() *[]*string
```

- *Type:* *[]*string

---

##### `SyslogFacility`<sup>Required</sup> <a name="SyslogFacility" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility"></a>

```go
func SyslogFacility() *string
```

- *Type:* *string

---

##### `TaggedAddresses`<sup>Required</sup> <a name="TaggedAddresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses"></a>

```go
func TaggedAddresses() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Telemetry`<sup>Required</sup> <a name="Telemetry" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry"></a>

```go
func Telemetry() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TlsCaFile`<sup>Required</sup> <a name="TlsCaFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile"></a>

```go
func TlsCaFile() *string
```

- *Type:* *string

---

##### `TlsCertFile`<sup>Required</sup> <a name="TlsCertFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile"></a>

```go
func TlsCertFile() *string
```

- *Type:* *string

---

##### `TlsKeyFile`<sup>Required</sup> <a name="TlsKeyFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile"></a>

```go
func TlsKeyFile() *string
```

- *Type:* *string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion"></a>

```go
func TlsMinVersion() *string
```

- *Type:* *string

---

##### `TlsVerifyIncoming`<sup>Required</sup> <a name="TlsVerifyIncoming" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming"></a>

```go
func TlsVerifyIncoming() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TlsVerifyOutgoing`<sup>Required</sup> <a name="TlsVerifyOutgoing" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing"></a>

```go
func TlsVerifyOutgoing() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TlsVerifyServerHostname`<sup>Required</sup> <a name="TlsVerifyServerHostname" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname"></a>

```go
func TlsVerifyServerHostname() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TranslateWanAddrs`<sup>Required</sup> <a name="TranslateWanAddrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs"></a>

```go
func TranslateWanAddrs() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UiDir`<sup>Required</sup> <a name="UiDir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir"></a>

```go
func UiDir() *string
```

- *Type:* *string

---

##### `UnixSockets`<sup>Required</sup> <a name="UnixSockets" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets"></a>

```go
func UnixSockets() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionPrerelease`<sup>Required</sup> <a name="VersionPrerelease" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease"></a>

```go
func VersionPrerelease() *string
```

- *Type:* *string

---

##### `VersionRevision`<sup>Required</sup> <a name="VersionRevision" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision"></a>

```go
func VersionRevision() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAgentSelfConfig <a name="DataConsulAgentSelfConfig" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulagentself"

&dataconsulagentself.DataConsulAgentSelfConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---




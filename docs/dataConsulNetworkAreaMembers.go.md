# `dataConsulNetworkAreaMembers` Submodule <a name="`dataConsulNetworkAreaMembers` Submodule" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNetworkAreaMembers <a name="DataConsulNetworkAreaMembers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/d/network_area_members consul_network_area_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

dataconsulnetworkareamembers.NewDataConsulNetworkAreaMembers(scope Construct, id *string, config DataConsulNetworkAreaMembersConfig) DataConsulNetworkAreaMembers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig">DataConsulNetworkAreaMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig">DataConsulNetworkAreaMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetId"></a>

```go
func ResetId()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

dataconsulnetworkareamembers.DataConsulNetworkAreaMembers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

dataconsulnetworkareamembers.DataConsulNetworkAreaMembers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

dataconsulnetworkareamembers.DataConsulNetworkAreaMembers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.members">Members</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList">DataConsulNetworkAreaMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.members"></a>

```go
func Members() DataConsulNetworkAreaMembersMembersList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList">DataConsulNetworkAreaMembersMembersList</a>

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNetworkAreaMembersConfig <a name="DataConsulNetworkAreaMembersConfig" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

&dataconsulnetworkareamembers.DataConsulNetworkAreaMembersConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Uuid: *string,
	Datacenter: *string,
	Id: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.uuid">Uuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#uuid DataConsulNetworkAreaMembers#uuid}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#datacenter DataConsulNetworkAreaMembers#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#id DataConsulNetworkAreaMembers#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#token DataConsulNetworkAreaMembers#token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#uuid DataConsulNetworkAreaMembers#uuid}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#datacenter DataConsulNetworkAreaMembers#datacenter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#id DataConsulNetworkAreaMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/network_area_members#token DataConsulNetworkAreaMembers#token}.

---

### DataConsulNetworkAreaMembersMembers <a name="DataConsulNetworkAreaMembersMembers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

&dataconsulnetworkareamembers.DataConsulNetworkAreaMembersMembers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulNetworkAreaMembersMembersList <a name="DataConsulNetworkAreaMembersMembersList" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

dataconsulnetworkareamembers.NewDataConsulNetworkAreaMembersMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataConsulNetworkAreaMembersMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.get"></a>

```go
func Get(index *f64) DataConsulNetworkAreaMembersMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataConsulNetworkAreaMembersMembersOutputReference <a name="DataConsulNetworkAreaMembersMembersOutputReference" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v3/dataconsulnetworkareamembers"

dataconsulnetworkareamembers.NewDataConsulNetworkAreaMembersMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataConsulNetworkAreaMembersMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.rtt">Rtt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers">DataConsulNetworkAreaMembersMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Rtt`<sup>Required</sup> <a name="Rtt" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.rtt"></a>

```go
func Rtt() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataConsulNetworkAreaMembersMembers
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkAreaMembers.DataConsulNetworkAreaMembersMembers">DataConsulNetworkAreaMembersMembers</a>

---




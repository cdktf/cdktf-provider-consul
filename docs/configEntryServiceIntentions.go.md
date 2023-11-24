# `consul_config_entry_service_intentions`

Refer to the Terraform Registory for docs: [`consul_config_entry_service_intentions`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions).

# `configEntryServiceIntentions` Submodule <a name="`configEntryServiceIntentions` Submodule" id="@cdktf/provider-consul.configEntryServiceIntentions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceIntentions <a name="ConfigEntryServiceIntentions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions consul_config_entry_service_intentions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentions(scope Construct, id *string, config ConfigEntryServiceIntentionsConfig) ConfigEntryServiceIntentions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig">ConfigEntryServiceIntentionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig">ConfigEntryServiceIntentionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt">PutJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetJwt">ResetJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutJwt` <a name="PutJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt"></a>

```go
func PutJwt(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetId"></a>

```go
func ResetId()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetJwt"></a>

```go
func ResetJwt()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetMeta"></a>

```go
func ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetSources"></a>

```go
func ResetSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceIntentions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.ConfigEntryServiceIntentions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.ConfigEntryServiceIntentions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.ConfigEntryServiceIntentions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.ConfigEntryServiceIntentions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigEntryServiceIntentions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigEntryServiceIntentions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigEntryServiceIntentions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceIntentions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwt">Jwt</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList">ConfigEntryServiceIntentionsJwtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList">ConfigEntryServiceIntentionsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwtInput">JwtInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.metaInput">MetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.meta">Meta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwt"></a>

```go
func Jwt() ConfigEntryServiceIntentionsJwtList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList">ConfigEntryServiceIntentionsJwtList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sources"></a>

```go
func Sources() ConfigEntryServiceIntentionsSourcesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList">ConfigEntryServiceIntentionsSourcesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwtInput"></a>

```go
func JwtInput() interface{}
```

- *Type:* interface{}

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.metaInput"></a>

```go
func MetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.meta"></a>

```go
func Meta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceIntentionsConfig <a name="ConfigEntryServiceIntentionsConfig" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Jwt: interface{},
	Meta: *map[string]*string,
	Namespace: *string,
	Partition: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.name">Name</a></code> | <code>*string</code> | Specifies a name of the destination service for all intentions defined in the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.jwt">Jwt</a></code> | <code>interface{}</code> | jwt block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.meta">Meta</a></code> | <code>*map[string]*string</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies a name of the destination service for all intentions defined in the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.jwt"></a>

```go
Jwt interface{}
```

- *Type:* interface{}

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#jwt ConfigEntryServiceIntentions#jwt}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.meta"></a>

```go
Meta *map[string]*string
```

- *Type:* *map[string]*string

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#meta ConfigEntryServiceIntentions#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#sources ConfigEntryServiceIntentions#sources}

---

### ConfigEntryServiceIntentionsJwt <a name="ConfigEntryServiceIntentionsJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsJwt {
	Providers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.property.providers">Providers</a></code> | <code>interface{}</code> | providers block. |

---

##### `Providers`<sup>Optional</sup> <a name="Providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.property.providers"></a>

```go
Providers interface{}
```

- *Type:* interface{}

providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#providers ConfigEntryServiceIntentions#providers}

---

### ConfigEntryServiceIntentionsJwtProviders <a name="ConfigEntryServiceIntentionsJwtProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsJwtProviders {
	Name: *string,
	VerifyClaims: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.name">Name</a></code> | <code>*string</code> | Specifies the name of a JWT provider defined in the Name field of the jwt-provider configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.verifyClaims">VerifyClaims</a></code> | <code>interface{}</code> | verify_claims block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of a JWT provider defined in the Name field of the jwt-provider configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `VerifyClaims`<sup>Optional</sup> <a name="VerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.verifyClaims"></a>

```go
VerifyClaims interface{}
```

- *Type:* interface{}

verify_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#verify_claims ConfigEntryServiceIntentions#verify_claims}

---

### ConfigEntryServiceIntentionsJwtProvidersVerifyClaims <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims {
	Path: *[]*string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.path">Path</a></code> | <code>*[]*string</code> | Specifies the path to the claim in the JSON web token. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.value">Value</a></code> | <code>*string</code> | Specifies the value to match on when verifying the the claim designated in path. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.path"></a>

```go
Path *[]*string
```

- *Type:* *[]*string

Specifies the path to the claim in the JSON web token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path ConfigEntryServiceIntentions#path}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.value"></a>

```go
Value *string
```

- *Type:* *string

Specifies the value to match on when verifying the the claim designated in path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#value ConfigEntryServiceIntentions#value}

---

### ConfigEntryServiceIntentionsSources <a name="ConfigEntryServiceIntentionsSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsSources {
	Action: *string,
	Description: *string,
	Name: *string,
	Namespace: *string,
	Partition: *string,
	Peer: *string,
	Permissions: interface{},
	Precedence: *f64,
	SamenessGroup: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.action">Action</a></code> | <code>*string</code> | Specifies the action to take when the source sends traffic to the destination service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.description">Description</a></code> | <code>*string</code> | Specifies a description of the intention. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the source that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the traffic source namespace that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.partition">Partition</a></code> | <code>*string</code> | Specifies the name of an admin partition that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.peer">Peer</a></code> | <code>*string</code> | Specifies the name of a peered Consul cluster that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.permissions">Permissions</a></code> | <code>interface{}</code> | permissions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.precedence">Precedence</a></code> | <code>*f64</code> | The Precedence field contains a read-only integer. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.samenessGroup">SamenessGroup</a></code> | <code>*string</code> | Specifies the name of a sameness group that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.type">Type</a></code> | <code>*string</code> | Specifies the type of destination service that the configuration entry applies to. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.action"></a>

```go
Action *string
```

- *Type:* *string

Specifies the action to take when the source sends traffic to the destination service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#action ConfigEntryServiceIntentions#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.description"></a>

```go
Description *string
```

- *Type:* *string

Specifies a description of the intention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#description ConfigEntryServiceIntentions#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the source that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the traffic source namespace that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the name of an admin partition that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.peer"></a>

```go
Peer *string
```

- *Type:* *string

Specifies the name of a peered Consul cluster that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#peer ConfigEntryServiceIntentions#peer}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#permissions ConfigEntryServiceIntentions#permissions}

---

##### `Precedence`<sup>Optional</sup> <a name="Precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.precedence"></a>

```go
Precedence *f64
```

- *Type:* *f64

The Precedence field contains a read-only integer.

Consul generates the value based on name configurations for the source and destination services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#precedence ConfigEntryServiceIntentions#precedence}

---

##### `SamenessGroup`<sup>Optional</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.samenessGroup"></a>

```go
SamenessGroup *string
```

- *Type:* *string

Specifies the name of a sameness group that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#sameness_group ConfigEntryServiceIntentions#sameness_group}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the type of destination service that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#type ConfigEntryServiceIntentions#type}

---

### ConfigEntryServiceIntentionsSourcesPermissions <a name="ConfigEntryServiceIntentionsSourcesPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsSourcesPermissions {
	Action: *string,
	Http: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.action">Action</a></code> | <code>*string</code> | Specifies the action to take when the source sends traffic to the destination service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.http">Http</a></code> | <code>interface{}</code> | http block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.action"></a>

```go
Action *string
```

- *Type:* *string

Specifies the action to take when the source sends traffic to the destination service.

The value is either allow or deny.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#action ConfigEntryServiceIntentions#action}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.http"></a>

```go
Http interface{}
```

- *Type:* interface{}

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#http ConfigEntryServiceIntentions#http}

---

### ConfigEntryServiceIntentionsSourcesPermissionsHttp <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttp" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp {
	Headers: interface{},
	Methods: *[]*string,
	PathExact: *string,
	PathPrefix: *string,
	PathRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.methods">Methods</a></code> | <code>*[]*string</code> | Specifies a list of HTTP methods. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathExact">PathExact</a></code> | <code>*string</code> | Specifies an exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | Specifies a path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathRegex">PathRegex</a></code> | <code>*string</code> | Defines a regular expression to match on the HTTP request path. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#headers ConfigEntryServiceIntentions#headers}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

Specifies a list of HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#methods ConfigEntryServiceIntentions#methods}

---

##### `PathExact`<sup>Optional</sup> <a name="PathExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathExact"></a>

```go
PathExact *string
```

- *Type:* *string

Specifies an exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path_exact ConfigEntryServiceIntentions#path_exact}

---

##### `PathPrefix`<sup>Optional</sup> <a name="PathPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathPrefix"></a>

```go
PathPrefix *string
```

- *Type:* *string

Specifies a path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path_prefix ConfigEntryServiceIntentions#path_prefix}

---

##### `PathRegex`<sup>Optional</sup> <a name="PathRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathRegex"></a>

```go
PathRegex *string
```

- *Type:* *string

Defines a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#path_regex ConfigEntryServiceIntentions#path_regex}

---

### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

&configentryserviceintentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders {
	Name: *string,
	Exact: *string,
	Invert: interface{},
	Prefix: *string,
	Present: interface{},
	Regex: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.exact">Exact</a></code> | <code>*string</code> | Specifies a value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.invert">Invert</a></code> | <code>interface{}</code> | Inverts the matching logic configured in the Header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.prefix">Prefix</a></code> | <code>*string</code> | Specifies a prefix value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.present">Present</a></code> | <code>interface{}</code> | Enables a match if the header configured in the Name field appears in the request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.regex">Regex</a></code> | <code>*string</code> | Specifies a regular expression pattern as the value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.suffix">Suffix</a></code> | <code>*string</code> | Specifies a suffix value for the header key set in the Name field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Specifies a value for the header key set in the Name field.

If the request header value matches the Exact value, Consul applies the permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#exact ConfigEntryServiceIntentions#exact}

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.invert"></a>

```go
Invert interface{}
```

- *Type:* interface{}

Inverts the matching logic configured in the Header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#invert ConfigEntryServiceIntentions#invert}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Specifies a prefix value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#prefix ConfigEntryServiceIntentions#prefix}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.present"></a>

```go
Present interface{}
```

- *Type:* interface{}

Enables a match if the header configured in the Name field appears in the request.

Consul matches on any value as long as the header key appears in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#present ConfigEntryServiceIntentions#present}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Specifies a regular expression pattern as the value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#regex ConfigEntryServiceIntentions#regex}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

Specifies a suffix value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_intentions#suffix ConfigEntryServiceIntentions#suffix}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceIntentionsJwtList <a name="ConfigEntryServiceIntentionsJwtList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsJwtList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsJwtList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsJwtOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsJwtOutputReference <a name="ConfigEntryServiceIntentionsJwtOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsJwtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsJwtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders">PutProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resetProviders">ResetProviders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviders` <a name="PutProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders"></a>

```go
func PutProviders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProviders` <a name="ResetProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resetProviders"></a>

```go
func ResetProviders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providers">Providers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList">ConfigEntryServiceIntentionsJwtProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providersInput">ProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Providers`<sup>Required</sup> <a name="Providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providers"></a>

```go
func Providers() ConfigEntryServiceIntentionsJwtProvidersList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList">ConfigEntryServiceIntentionsJwtProvidersList</a>

---

##### `ProvidersInput`<sup>Optional</sup> <a name="ProvidersInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providersInput"></a>

```go
func ProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsJwtProvidersList <a name="ConfigEntryServiceIntentionsJwtProvidersList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsJwtProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsJwtProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsJwtProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsJwtProvidersOutputReference <a name="ConfigEntryServiceIntentionsJwtProvidersOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsJwtProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsJwtProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims">PutVerifyClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetVerifyClaims">ResetVerifyClaims</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVerifyClaims` <a name="PutVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims"></a>

```go
func PutVerifyClaims(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVerifyClaims` <a name="ResetVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetVerifyClaims"></a>

```go
func ResetVerifyClaims()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaims">VerifyClaims</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList">ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaimsInput">VerifyClaimsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VerifyClaims`<sup>Required</sup> <a name="VerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaims"></a>

```go
func VerifyClaims() ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList">ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VerifyClaimsInput`<sup>Optional</sup> <a name="VerifyClaimsInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaimsInput"></a>

```go
func VerifyClaimsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.pathInput">PathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.path">Path</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.pathInput"></a>

```go
func PathInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.path"></a>

```go
func Path() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesList <a name="ConfigEntryServiceIntentionsSourcesList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesOutputReference <a name="ConfigEntryServiceIntentionsSourcesOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPrecedence">ResetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetSamenessGroup">ResetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPeer"></a>

```go
func ResetPeer()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrecedence` <a name="ResetPrecedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPrecedence"></a>

```go
func ResetPrecedence()
```

##### `ResetSamenessGroup` <a name="ResetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetSamenessGroup"></a>

```go
func ResetSamenessGroup()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList">ConfigEntryServiceIntentionsSourcesPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peerInput">PeerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedenceInput">PrecedenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroupInput">SamenessGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peer">Peer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedence">Precedence</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroup">SamenessGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissions"></a>

```go
func Permissions() ConfigEntryServiceIntentionsSourcesPermissionsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList">ConfigEntryServiceIntentionsSourcesPermissionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peerInput"></a>

```go
func PeerInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedenceInput"></a>

```go
func PrecedenceInput() *f64
```

- *Type:* *f64

---

##### `SamenessGroupInput`<sup>Optional</sup> <a name="SamenessGroupInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroupInput"></a>

```go
func SamenessGroupInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peer"></a>

```go
func Peer() *string
```

- *Type:* *string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedence"></a>

```go
func Precedence() *f64
```

- *Type:* *f64

---

##### `SamenessGroup`<sup>Required</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroup"></a>

```go
func SamenessGroup() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetInvert"></a>

```go
func ResetInvert()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invertInput">InvertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.presentInput">PresentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invert">Invert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.present">Present</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invertInput"></a>

```go
func InvertInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.presentInput"></a>

```go
func PresentInput() interface{}
```

- *Type:* interface{}

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invert"></a>

```go
func Invert() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.present"></a>

```go
func Present() interface{}
```

- *Type:* interface{}

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpList <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesPermissionsHttpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsSourcesPermissionsHttpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathExact">ResetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathPrefix">ResetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathRegex">ResetPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetMethods"></a>

```go
func ResetMethods()
```

##### `ResetPathExact` <a name="ResetPathExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathExact"></a>

```go
func ResetPathExact()
```

##### `ResetPathPrefix` <a name="ResetPathPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathPrefix"></a>

```go
func ResetPathPrefix()
```

##### `ResetPathRegex` <a name="ResetPathRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathRegex"></a>

```go
func ResetPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExactInput">PathExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefixInput">PathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegexInput">PathRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExact">PathExact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegex">PathRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headers"></a>

```go
func Headers() ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathExactInput`<sup>Optional</sup> <a name="PathExactInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExactInput"></a>

```go
func PathExactInput() *string
```

- *Type:* *string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefixInput"></a>

```go
func PathPrefixInput() *string
```

- *Type:* *string

---

##### `PathRegexInput`<sup>Optional</sup> <a name="PathRegexInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegexInput"></a>

```go
func PathRegexInput() *string
```

- *Type:* *string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `PathExact`<sup>Required</sup> <a name="PathExact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExact"></a>

```go
func PathExact() *string
```

- *Type:* *string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefix"></a>

```go
func PathPrefix() *string
```

- *Type:* *string

---

##### `PathRegex`<sup>Required</sup> <a name="PathRegex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegex"></a>

```go
func PathRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesPermissionsList <a name="ConfigEntryServiceIntentionsSourcesPermissionsList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceIntentionsSourcesPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceIntentionsSourcesPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceIntentionsSourcesPermissionsOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryserviceintentions"

configentryserviceintentions.NewConfigEntryServiceIntentionsSourcesPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceIntentionsSourcesPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp">PutHttp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp"></a>

```go
func PutHttp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList">ConfigEntryServiceIntentionsSourcesPermissionsHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.httpInput">HttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.http"></a>

```go
func Http() ConfigEntryServiceIntentionsSourcesPermissionsHttpList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList">ConfigEntryServiceIntentionsSourcesPermissionsHttpList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.httpInput"></a>

```go
func HttpInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



